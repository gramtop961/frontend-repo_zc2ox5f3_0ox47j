import { Play, Zap, Layers, Monitor } from 'lucide-react';

const features = [
  {
    icon: Play,
    title: 'Riproduzione Essenziale',
    desc: 'Controlli minimali, nessun fronzolo: premi play e goditi il contenuto.'
  },
  {
    icon: Zap,
    title: 'Prestazioni Veloci',
    desc: 'Avvio immediato e navigazione fluida anche con file pesanti.'
  },
  {
    icon: Layers,
    title: 'Formati Multipli',
    desc: 'Supporto per i più diffusi formati audio e video senza plugin.'
  },
  {
    icon: Monitor,
    title: 'Design Pulito',
    desc: 'Interfaccia scura chiara e leggibile, ispirata a mpv.org.'
  }
];

export default function Features() {
  return (
    <section id="caratteristiche" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
          Perché MpV Monopoli?
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Un player minimalista che punta a semplicità, velocità e qualità.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-neutral-900 p-2 text-white"><Icon size={18} /></div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
