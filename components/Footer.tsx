import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-slate-900 py-8">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <p className="text-slate-500 text-sm">
                © {currentYear} [Andrea Galasso]. Built with Next.js & Tailwind.
                </p>

                <div className="flex items-center gap-6">
                    <a 
                        href="https://github.com/galassoandrea" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/andrea-galasso-751798167" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={20} />
                    </a>
                    <a 
                        href="mailto:galassoandrea99@gmail.com" 
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <FiMail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
