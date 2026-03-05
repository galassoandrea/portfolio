import { Project } from "@/data/projects";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition-colors group">
      <div className="relative h-48 bg-slate-700 w-full overflow-hidden">
        <Image 
          src={project.image}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          alt={project.title}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-900 text-blue-400 text-xs rounded-full border border-blue-400/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between">
          <a href={project.githubLink} className="text-sm font-semibold hover:text-blue-400 transition">GitHub →</a>
          <a href={project.previewLink} className="text-sm font-semibold hover:text-blue-400 transition">Live Demo →</a>
        </div>
      </div>
    </div>
  );
}