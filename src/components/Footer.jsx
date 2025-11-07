export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} MpV Monopoli · Progetto ispirato a mpv.org
        </div>
        <div className="flex items-center gap-4">
          <a href="#documentazione" className="hover:text-neutral-900">Documentazione</a>
          <a href="#download" className="hover:text-neutral-900">Download</a>
          <a href="#" className="hover:text-neutral-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
