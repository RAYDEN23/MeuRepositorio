import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold tracking-tighter text-slate-100 mb-6">
          Gerencie currículos com <span className="text-sky-400">elegância</span>
        </h1>
        <p className="text-lg text-slate-400 mb-10">
          Sistema moderno, bonito e totalmente funcional para recrutadores e gestores de RH.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Link href="/sistema/paginas/curriculos" className="bg-sky-500 text-zinc-950 px-8 py-3 rounded-2xl hover:bg-sky-400 transition">
            Ver Currículos
          </Link>
          <Link href="/sistema/paginas/curriculos/novo" className="border border-slate-700 text-slate-100 px-8 py-3 rounded-2xl hover:bg-zinc-900 transition">
            Cadastrar Novo
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {[
          'Formulário dinâmico com Field Arrays',
          'Filtro em tempo real',
          'Design moderno e acessível'
        ].map((item, i) => (
          <div key={i} className="flex gap-4 bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <CheckCircle className="text-sky-400 mt-1" />
            <p className="text-lg text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}