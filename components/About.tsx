import { info } from "@/data/about"

export default function About() {
    return (
        <section id="about" className="max-w-6xl mb-30 mx-auto md:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="h-2 w-12 bg-blue-500"></span>
          About Me
        </h2>
        <div className="text-lg text-slate-400 leading-relaxed space-y-4">
          {info.split('.').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}.</p>
          ))}
        </div>
      </section>
    )
}