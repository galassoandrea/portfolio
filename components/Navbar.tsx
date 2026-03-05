import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          <Image 
            src="/logo.png"
            width={80}
            height={80}
            alt="logo image"
          />
        </Link>
        
        <div className="flex gap-8 items-center text-md font-medium text-slate-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="/cv_public.pdf" target="_blank" className="hover:text-white transition">Resume</Link>
          <Link href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}