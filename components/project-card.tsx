import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
  results?: string;
}

export default function ProjectCard({
  title,
  description,
  problem,
  solution,
  tech,
  image,
  liveUrl,
  githubUrl,
  results,
}: ProjectCardProps) {
  return (
    <div className="group h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Problem & Solution */}
        <div className="space-y-3 py-3 border-y border-white/10">
          <div>
            <p className="text-purple-400 text-xs font-bold mb-1 uppercase tracking-wide">Problem</p>
            <p className="text-white/70 text-sm leading-relaxed">{problem}</p>
          </div>
          <div>
            <p className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide">Solution</p>
            <p className="text-white/70 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/30">
            <p className="text-purple-300 text-xs font-bold mb-2 uppercase tracking-wide">Results</p>
            <p className="text-white/80 text-sm leading-relaxed">{results}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 py-2">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/40">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-semibold transform hover:scale-105 duration-200"
          >
            ↗ View Live
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 hover:border-white/50 transition-all font-semibold"
            >
              ⭐
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
