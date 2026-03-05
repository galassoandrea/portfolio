import {projects} from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Andrea
        </h1>
        <p className="mt-6 text-slate-400 max-w-2xl text-center">
          Computer Engineering graduate, specialized in Software Engineering & AI. I build intelligent systems 
          and scalable web applications.
        </p>
        <div className="mt-8 flex gap-4">
          <Link 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            href="#projects"
          >
            View My Projects
          </Link>
          <Link 
            className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-lg font-medium transition"
            href="/cv_public.pdf" 
            target="_blank"
          >
            Download CV
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-blue-500"></span>
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto px-8 py-24">
        <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <ContactForm/>
        </div>
      </section>
      
    </main>
  );
}
