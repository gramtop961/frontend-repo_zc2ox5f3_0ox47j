import { Download, Terminal, Github, Book } from 'lucide-react';

export default function Installation() {
  return (
    <section id="installazione" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
          Installation
        </h2>
        <p className="mt-2 text-neutral-700">
          mpv is a free, open source, and cross‑platform media player. Use the package manager of your
          system or grab a prebuilt binary. See the manual for details.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-3 flex items-center gap-2 text-neutral-900 font-medium">
              <Terminal size={18} /> macOS (Homebrew)
            </div>
            <pre className="overflow-x-auto rounded-md bg-neutral-900 p-3 text-sm text-white"><code>brew install mpv</code></pre>
          </div>

          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-3 flex items-center gap-2 text-neutral-900 font-medium">
              <Download size={18} /> Windows
            </div>
            <p className="text-sm text-neutral-700">
              Get the latest installer from community builds or use a package manager like Scoop or Chocolatey.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-md bg-neutral-900 p-3 text-sm text-white"><code>choco install mpv</code></pre>
          </div>

          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-3 flex items-center gap-2 text-neutral-900 font-medium">
              <Terminal size={18} /> Debian/Ubuntu
            </div>
            <pre className="overflow-x-auto rounded-md bg-neutral-900 p-3 text-sm text-white"><code>sudo apt install mpv</code></pre>
          </div>

          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-3 flex items-center gap-2 text-neutral-900 font-medium">
              <Terminal size={18} /> Arch Linux
            </div>
            <pre className="overflow-x-auto rounded-md bg-neutral-900 p-3 text-sm text-white"><code>sudo pacman -S mpv</code></pre>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <a href="#documentazione" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
            <Book size={16} /> User manual
          </a>
          <a href="https://github.com/mpv-player/mpv" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
            <Github size={16} /> Source code
          </a>
        </div>
      </div>
    </section>
  );
}
