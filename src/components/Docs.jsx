import { BookOpen, List, Settings } from 'lucide-react';

export default function Docs() {
  return (
    <section id="documentazione" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Documentation</h2>
        <p className="mt-2 text-neutral-700">
          Read the manual to learn how to control playback, configure options, and extend functionality.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-2 flex items-center gap-2 font-medium text-neutral-900">
              <BookOpen size={18} /> User manual
            </div>
            <p className="text-sm text-neutral-700">Complete reference covering commands, key bindings, and configuration.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-2 flex items-center gap-2 font-medium text-neutral-900">
              <List size={18} /> Key bindings
            </div>
            <p className="text-sm text-neutral-700">Default shortcuts and how to customize them for your workflow.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5">
            <div className="mb-2 flex items-center gap-2 font-medium text-neutral-900">
              <Settings size={18} /> Configuration
            </div>
            <p className="text-sm text-neutral-700">Options, profiles, and per‑file overrides to tune playback.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
