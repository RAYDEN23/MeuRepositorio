'use client';
import { useEffect, useState } from 'react';
import { Curriculum } from '@/lib/types';
import CurriculumCard from '@/components/CurriculumCard';
import { Search } from 'lucide-react';

export default function CurriculosPage() {
  const [curriculos, setCurriculos] = useState<Curriculum[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('curriculos');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurriculos(data ? JSON.parse(data) : []);
  }, []);

  const filtered = curriculos.filter(c =>
    c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-100">Currículos Cadastrados</h1>
          <p className="mt-2 text-sm text-slate-400">{curriculos.length} currículos salvos</p>
        </div>

        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Buscar por nome ou cargo..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-4 text-sm text-slate-100 shadow-sm outline-none transition focus:border-sky-500"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/90 p-16 text-center text-slate-400 shadow-sm">
          <p className="text-lg font-medium text-slate-100">Nenhum currículo encontrado.</p>
          <p className="mt-3 text-sm">Cadastre um novo currículo para começar a preencher sua lista.</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {filtered.map(curriculo => (
            <CurriculumCard key={curriculo.id} curriculo={curriculo} />
          ))}
        </div>
      )}
    </div>
  );
}