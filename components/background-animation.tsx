'use client';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-charcoal">
      {/* Aurora / Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cobalt-600/[0.12] rounded-full blur-[150px] mix-blend-screen animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-blue-500/[0.08] rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-500/[0.08] rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-4000"></div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
