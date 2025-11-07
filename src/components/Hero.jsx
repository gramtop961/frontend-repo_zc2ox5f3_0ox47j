export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              MpV Monopoli
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Un lettore multimediale minimale ispirato allo stile essenziale di mpv.org: rapido, elegante e focalizzato su ciò che conta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-white shadow-sm hover:bg-neutral-800 transition-colors">
                Scarica
              </a>
              <a href="#documentazione" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 text-neutral-900 hover:bg-neutral-50 transition-colors">
                Documentazione
              </a>
            </div>
          </div>
          <div className="relative aspect-video w-full rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 shadow-sm">
            <div className="absolute inset-0 grid place-items-center text-neutral-500">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest">Anteprima</div>
                <div className="mt-1 text-2xl font-semibold">Interfaccia pulita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
