import Link from 'next/link';
import Image from 'next/image';
import { Curriculum } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function CurriculumCard({ curriculo }: { curriculo: Curriculum }) {
  return (
    <article className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <Image
          src={curriculo.foto || '/default-avatar.png'}
          alt={curriculo.nome}
          width={64}
          height={64}
          className="h-16 w-16 rounded-3xl object-cover"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="truncate text-xl font-semibold text-slate-100">{curriculo.nome}</h3>
              <p className="mt-1 text-sm font-medium text-sky-300">{curriculo.cargo}</p>
            </div>
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              {formatDate(new Date(curriculo.createdAt))}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400 line-clamp-3">{curriculo.resumoProfissional}</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl bg-zinc-900 px-3 py-2 text-xs font-medium text-slate-300">{curriculo.email}</span>
            <span className="rounded-2xl bg-zinc-900 px-3 py-2 text-xs font-medium text-slate-300">{curriculo.telefone}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {curriculo.habilidades.slice(0, 4).map((hab, i) => (
              <span key={i} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-slate-300">
                {hab}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={`/sistema/paginas/curriculos/${curriculo.id}`}
        className="mt-6 inline-flex w-full justify-center rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400"
      >
        Ver detalhes →
      </Link>
    </article>
  );
}