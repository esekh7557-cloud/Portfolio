'use client';

import { useEffect, useRef } from 'react';

type NodePoint = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  radius: number;
  glow: number;
  orbit: number;
  phase: number;
  speed: number;
};

type Connection = [from: number, to: number];

type ConnectionCandidate = {
  from: number;
  to: number;
  distance: number;
};

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

const NETWORK_SPEED = 1.7;

const svgGlowNodes = [
  { cx: 716, cy: 708, radius: 2.6, delay: '0s' },
  { cx: 856, cy: 636, radius: 2.2, delay: '1.1s' },
  { cx: 956, cy: 548, radius: 3.1, delay: '0.6s' },
  { cx: 1128, cy: 244, radius: 2.8, delay: '1.8s' },
  { cx: 1206, cy: 184, radius: 3.3, delay: '0.3s' },
  { cx: 1304, cy: 132, radius: 2.5, delay: '1.4s' },
  { cx: 1018, cy: 578, radius: 2.1, delay: '2s' },
  { cx: 1256, cy: 548, radius: 3, delay: '0.9s' },
  { cx: 1084, cy: 218, radius: 2.3, delay: '1.6s' },
];

const makeRandom = (seed: number) => {
  let value = seed;

  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
};

const createNodes = (width: number, height: number) => {
  const random = makeRandom(42);
  const nodes: NodePoint[] = [];
  const density = clamp(
    Math.sqrt((width * height) / (1366 * 768)),
    0.42,
    1,
  );
  const orbitScale = clamp(Math.min(width, height) / 768, 0.72, 1.12);
  const rightCount = Math.round(56 * density);
  const lowerCount = Math.round(42 * density);
  const sparseCount = Math.round(14 * density);

  const pushNode = (baseX: number, baseY: number, emphasis = 1) => {
    nodes.push({
      baseX,
      baseY,
      x: baseX,
      y: baseY,
      radius: (1.2 + random() * 2.2) * emphasis,
      glow: 0.45 + random() * 0.55,
      orbit: (8 + random() * 18) * orbitScale,
      phase: random() * Math.PI * 2,
      speed: 0.38 + random() * 0.32,
    });
  };

  for (let i = 0; i < rightCount; i += 1) {
    const columnBias = Math.pow(random(), 0.56);
    const x = width * (0.66 + columnBias * 0.39);
    const y = height * (-0.03 + random() * 0.82);

    pushNode(x, y, random() > 0.82 ? 1.45 : 1);
  }

  for (let i = 0; i < lowerCount; i += 1) {
    const x = width * (0.24 + random() * 0.82);
    const wave = Math.sin((x / width) * Math.PI * 3.5) * height * 0.08;
    const y = height * (0.66 + random() * 0.32) + wave;

    pushNode(x, y, random() > 0.86 ? 1.5 : 1);
  }

  for (let i = 0; i < sparseCount; i += 1) {
    const x = width * (0.1 + random() * 0.74);
    const y = height * (0.22 + random() * 0.62);

    pushNode(x, y, 0.72);
  }

  return nodes;
};

const createConnections = (
  nodes: NodePoint[],
  width: number,
  height: number,
) => {
  const maxDistance = clamp(Math.min(width, height) * 0.18, 68, 152);
  const maxConnections = width < 640 ? 2 : 3;
  const candidates: ConnectionCandidate[] = [];
  const connectionCounts = new Array(nodes.length).fill(0) as number[];

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const distance = Math.hypot(
        nodes[i].baseX - nodes[j].baseX,
        nodes[i].baseY - nodes[j].baseY,
      );

      if (distance < maxDistance) {
        candidates.push({ from: i, to: j, distance });
      }
    }
  }

  candidates.sort((a, b) => a.distance - b.distance);

  return candidates.reduce<Connection[]>((connections, candidate) => {
    const { from, to } = candidate;

    if (
      connectionCounts[from] < maxConnections &&
      connectionCounts[to] < maxConnections
    ) {
      connections.push([from, to]);
      connectionCounts[from] += 1;
      connectionCounts[to] += 1;
    }

    return connections;
  }, []);
};

const drawCurve = (
  context: CanvasRenderingContext2D,
  points: Array<[number, number]>,
) => {
  if (points.length < 2) {
    return;
  }

  context.beginPath();
  context.moveTo(points[0][0], points[0][1]);

  for (let i = 1; i < points.length - 1; i += 1) {
    const midpointX = (points[i][0] + points[i + 1][0]) / 2;
    const midpointY = (points[i][1] + points[i + 1][1]) / 2;
    context.quadraticCurveTo(points[i][0], points[i][1], midpointX, midpointY);
  }

  const last = points[points.length - 1];
  context.lineTo(last[0], last[1]);
  context.stroke();
};

const drawFlowingMesh = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
) => {
  context.save();
  context.lineCap = 'round';
  context.lineJoin = 'round';

  const horizontalRows = Math.round(
    18 * clamp(height / 768, 0.56, 1.15),
  );
  const horizontalColumns = Math.round(
    15 * clamp(width / 1366, 0.5, 1.15),
  );
  const rightRows = Math.round(16 * clamp(height / 768, 0.56, 1.15));
  const rightColumns = Math.round(
    11 * clamp(width / 1366, 0.5, 1.15),
  );

  for (let row = 0; row < horizontalRows; row += 1) {
    const points: Array<[number, number]> = [];
    const rowOffset = row / (horizontalRows - 1);

    for (let step = 0; step <= 52; step += 1) {
      const progress = step / 52;
      const envelope = Math.pow(progress, 1.2);
      const x = width * (0.18 + progress * 0.92);
      const y =
        height * (0.69 + rowOffset * 0.18) +
        Math.sin(progress * 8.8 + row * 0.34 + time * 0.7) *
          height *
          0.055 *
          envelope +
        Math.cos(progress * 4.1 - time * 0.34) * height * 0.028 * envelope -
        Math.pow(progress, 2.1) * height * 0.09;

      points.push([x, y]);
    }

    context.globalAlpha = 0.2 + rowOffset * 0.08;
    context.lineWidth = row % 4 === 0 ? 1.35 : 0.82;
    context.strokeStyle = 'rgba(80, 175, 255, 0.9)';
    drawCurve(context, points);
  }

  for (let column = 0; column < horizontalColumns; column += 1) {
    const points: Array<[number, number]> = [];
    const columnOffset = column / (horizontalColumns - 1);

    for (let step = 0; step <= 44; step += 1) {
      const progress = step / 44;
      const x =
        width * (0.36 + columnOffset * 0.69) +
        Math.sin(progress * 6.4 + time * 0.5 + column) * 20;
      const y =
        height * (0.62 + progress * 0.33) +
        Math.cos(columnOffset * 6 + progress * 4.5 + time * 0.42) *
          height *
          0.052 -
        Math.pow(columnOffset, 1.8) * height * 0.11;

      points.push([x, y]);
    }

    context.globalAlpha = 0.075;
    context.lineWidth = 0.82;
    context.strokeStyle = 'rgba(139, 216, 255, 0.85)';
    drawCurve(context, points);
  }

  for (let row = 0; row < rightRows; row += 1) {
    const points: Array<[number, number]> = [];
    const rowOffset = row / (rightRows - 1);

    for (let step = 0; step <= 44; step += 1) {
      const progress = step / 44;
      const x =
        width * (0.68 + progress * 0.42) +
        Math.sin(row * 0.5 + progress * 7 + time * 0.38) * 28;
      const y =
        height * (0.07 + rowOffset * 0.72) +
        Math.sin(progress * 8 + rowOffset * 5 + time * 0.55) *
          height *
          0.05;

      points.push([x, y]);
    }

    context.globalAlpha = 0.12 + rowOffset * 0.05;
    context.lineWidth = row % 5 === 0 ? 1.15 : 0.72;
    context.strokeStyle = 'rgba(95, 188, 255, 0.9)';
    drawCurve(context, points);
  }

  for (let column = 0; column < rightColumns; column += 1) {
    const points: Array<[number, number]> = [];
    const columnOffset = column / (rightColumns - 1);

    for (let step = 0; step <= 36; step += 1) {
      const progress = step / 36;
      const x =
        width * (0.72 + columnOffset * 0.34) +
        Math.sin(progress * 8.4 + time * 0.45) * 30;
      const y =
        height * (0.04 + progress * 0.76) +
        Math.cos(columnOffset * 7 + progress * 4 + time * 0.3) * 24;

      points.push([x, y]);
    }

    context.globalAlpha = 0.075;
    context.lineWidth = 0.68;
    context.strokeStyle = 'rgba(80, 175, 255, 0.85)';
    drawCurve(context, points);
  }

  context.restore();
};

const drawConnections = (
  context: CanvasRenderingContext2D,
  nodes: NodePoint[],
  connections: Connection[],
  width: number,
  height: number,
) => {
  const maxDistance = clamp(Math.min(width, height) * 0.18, 68, 152);

  context.save();
  context.lineWidth = 0.75;

  connections.forEach(([from, to]) => {
    const first = nodes[from];
    const second = nodes[to];
    const distance = Math.hypot(first.x - second.x, first.y - second.y);

    if (distance < maxDistance) {
      const alpha = (1 - distance / maxDistance) * 0.34;

      context.strokeStyle = `rgba(75, 178, 255, ${alpha})`;
      context.beginPath();
      context.moveTo(first.x, first.y);
      context.lineTo(second.x, second.y);
      context.stroke();
    }
  });

  context.restore();
};

const drawNodes = (context: CanvasRenderingContext2D, nodes: NodePoint[]) => {
  context.save();

  nodes.forEach((node) => {
    const halo = context.createRadialGradient(
      node.x,
      node.y,
      0,
      node.x,
      node.y,
      node.radius * 8,
    );

    halo.addColorStop(0, `rgba(91, 210, 255, ${0.34 * node.glow})`);
    halo.addColorStop(0.45, `rgba(36, 132, 255, ${0.18 * node.glow})`);
    halo.addColorStop(1, 'rgba(36, 132, 255, 0)');

    context.fillStyle = halo;
    context.beginPath();
    context.arc(node.x, node.y, node.radius * 8, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = `rgba(184, 238, 255, ${0.68 + node.glow * 0.32})`;
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    context.fill();
  });

  context.restore();
};

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let nodes: NodePoint[] = [];
    let connections: Connection[] = [];
    let animationFrame = 0;
    let animationStart: number | null = null;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      nodes = createNodes(width, height);
      connections = createConnections(nodes, width, height);
    };

    const paint = (time = window.performance.now()) => {
      animationStart ??= time;
      const seconds = (time - animationStart) * 0.001 * NETWORK_SPEED;

      context.clearRect(0, 0, width, height);
      drawFlowingMesh(context, width, height, seconds);

      nodes.forEach((node) => {
        node.x =
          node.baseX + Math.sin(seconds * node.speed + node.phase) * node.orbit;
        node.y =
          node.baseY +
          Math.cos(seconds * node.speed * 0.82 + node.phase) *
            node.orbit *
            0.7;
      });

      drawConnections(context, nodes, connections, width, height);
      drawNodes(context, nodes);

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(paint);
      }
    };

    resize();
    paint();

    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020916]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(20,116,205,0.28),transparent_34%),radial-gradient(circle_at_42%_72%,rgba(14,83,147,0.22),transparent_42%),linear-gradient(115deg,#020916_0%,#04152a_46%,#03101f_100%)] background-aurora-shift" />
      <div className="background-drift-slow absolute left-[-12%] top-[-14%] h-[36rem] w-[36rem] rounded-full bg-cobalt-500/12 blur-[140px]" />
      <div
        className="background-drift-medium absolute right-[-10%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-sky-300/12 blur-[130px]"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="background-drift-slow absolute bottom-[-18%] left-[28%] h-[28rem] w-[28rem] rounded-full bg-cobalt-400/10 blur-[120px]"
        style={{ animationDelay: '-12s' }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-95"
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-70 [mask-image:linear-gradient(90deg,transparent_0%,transparent_34%,rgba(0,0,0,0.72)_54%,black_100%)]"
        viewBox="0 0 1366 768"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <linearGradient id="mesh-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
            <stop offset="42%" stopColor="#38bdf8" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.74" />
          </linearGradient>
          <filter id="mesh-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill="none" stroke="url(#mesh-line)" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            dur="10s"
            repeatCount="indefinite"
            type="translate"
            values="0 0; -18 10; 0 0"
          />
          <path
            d="M702 718 C790 612 875 641 956 548 C1047 444 1038 314 1128 244 C1190 196 1274 192 1366 222"
            strokeWidth="1.2"
            opacity="0.68"
          />
          <path
            d="M606 760 C742 650 822 691 935 592 C1057 485 1018 366 1148 286 C1218 243 1288 260 1366 304"
            strokeWidth="0.85"
            opacity="0.48"
          />
          <path
            d="M776 768 C840 678 940 676 998 592 C1072 485 1020 378 1098 300 C1174 224 1270 242 1366 256"
            strokeWidth="0.75"
            opacity="0.44"
          />
          <path
            d="M980 0 C1044 74 1035 154 1084 218 C1144 296 1262 290 1366 364"
            strokeWidth="0.9"
            opacity="0.5"
          />
          <path
            d="M1056 0 C1086 96 1148 132 1206 184 C1268 240 1288 336 1366 390"
            strokeWidth="0.75"
            opacity="0.38"
          />
          <path
            d="M884 640 L1018 578 L1136 632 L1256 548 L1366 590"
            strokeWidth="0.7"
            opacity="0.34"
          />
          <path
            d="M1010 80 L1118 168 L1194 78 L1304 132 L1366 92"
            strokeWidth="0.7"
            opacity="0.34"
          />
        </g>
        <g filter="url(#mesh-glow)">
          {svgGlowNodes.map(({ cx, cy, radius, delay }) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={radius}
              fill="#b8eeff"
              opacity="0.82"
            >
              <animate
                attributeName="opacity"
                begin={delay}
                dur="3.2s"
                repeatCount="indefinite"
                values="0.34;0.95;0.34"
              />
            </circle>
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_22%,rgba(2,9,22,0.98)_0%,rgba(2,9,22,0.78)_28%,rgba(2,9,22,0.08)_64%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,9,22,0.95)_0%,rgba(2,9,22,0.68)_32%,rgba(2,9,22,0.04)_72%,transparent_100%)]" />
      <div className="background-pan-slow absolute inset-0 opacity-[0.05] mix-blend-screen [background-image:radial-gradient(circle,rgba(125,211,252,0.9)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div
        className="background-pan-reverse absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.82\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}
