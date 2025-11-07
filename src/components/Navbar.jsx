import { Github, Book, Download } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-neutral-900 text-white grid place-content-center font-bold">M</div>
            <span className="font-semibold tracking-tight">MpV Monopoli</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex text-sm">
            <a href="#caratteristiche" className="text-neutral-600 hover:text-neutral-900 transition-colors">Caratteristiche</a>
            <a href="#documentazione" className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1">
              <Book size={16} /> Documentazione
            </a>
            <a href="#download" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-1.5 text-white shadow-sm hover:bg-neutral-800 transition-colors">
              <Download size={16} /> Download
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1">
              <Github size={18} /> GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
