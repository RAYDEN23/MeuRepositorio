'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, PlusCircle } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Briefcase className="text-zinc-950 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-100">BJ</h1>
            <p className="text-xs text-slate-400 -mt-1">Gestor de Currículos</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
          <Link href="/" className={pathname === '/' ? 'text-sky-300 font-semibold' : 'hover:text-slate-100 transition-colors'}>
            Início
          </Link>
          <Link href="/sistema/paginas/curriculos" className={pathname.startsWith('/sistema/paginas/curriculos') ? 'text-sky-300 font-semibold' : 'hover:text-slate-100 transition-colors'}>
            Currículos
          </Link>

          <Link
            href="/sistema/paginas/curriculos/novo"
            className="flex items-center gap-2 bg-sky-500 text-zinc-950 px-5 py-3 rounded-2xl hover:bg-sky-400 transition-all active:scale-95 font-medium"
          >
            <PlusCircle size={18} />
            Novo Currículo
          </Link>
        </nav>
      </div>
    </header>
  );
}