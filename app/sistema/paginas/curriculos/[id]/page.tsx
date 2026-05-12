'use client';

import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { Curriculum } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DetalhesCurriculoPage({ params }: PageProps) {
  const { id } = use(params);
  const [curriculo, setCurriculo] = useState<Curriculum | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('curriculos');
    const curriculos: Curriculum[] = saved ? JSON.parse(saved) : [];
    const found = curriculos.find(c => c.id === id) || null;
    setCurriculo(found);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-12 text-center text-slate-300 shadow-xl shadow-black/20">
          <p className="text-lg font-medium">Carregando currículo...</p>
        </div>
      </div>
    );
  }

  if (!curriculo) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-slate-200">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-12 text-center shadow-xl shadow-black/20">
          <h1 className="text-3xl font-semibold mb-4">Currículo não encontrado</h1>
          <p className="text-slate-400 mb-6">Verifique se o currículo foi salvo e tente novamente.</p>
          <Link href="/sistema/paginas/curriculos" className="inline-flex rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-zinc-950 hover:bg-sky-400 transition">
            Voltar para a lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Detalhes do currículo</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-100">{curriculo.nome}</h1>
            <p className="mt-2 text-xl text-slate-300">{curriculo.cargo}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm text-slate-300">CPF: {curriculo.cpf}</span>
              <span className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm text-slate-300">Telefone: {curriculo.telefone}</span>
              <span className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm text-slate-300">Email: {curriculo.email}</span>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-slate-200 shadow-inner">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Criado em</p>
            <p className="mt-3 text-lg font-semibold text-slate-100">{formatDate(new Date(curriculo.createdAt))}</p>
            <div className="mt-6 space-y-3">
              <div className="rounded-3xl bg-zinc-950 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Total de habilidades</p>
                <p className="mt-2 text-xl font-semibold text-slate-100">{curriculo.habilidades.length}</p>
              </div>
              <div className="rounded-3xl bg-zinc-950 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Experiências</p>
                <p className="mt-2 text-xl font-semibold text-slate-100">{curriculo.experiencias.length}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Resumo profissional</h2>
            <p className="mt-4 text-slate-300 leading-7">{curriculo.resumoProfissional}</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Informações rápidas</h2>
            <div className="mt-4 space-y-3 text-slate-300">
              <p><span className="font-semibold text-slate-100">Email:</span> {curriculo.email}</p>
              <p><span className="font-semibold text-slate-100">Telefone:</span> {curriculo.telefone}</p>
              <p><span className="font-semibold text-slate-100">CPF:</span> {curriculo.cpf}</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-slate-100">Experiências</h2>
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200">{curriculo.experiencias.length} itens</span>
          </div>
          <div className="space-y-4">
            {curriculo.experiencias.map((exp, index) => (
              <div key={index} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-100">{exp.position}</p>
                    <p className="text-sm text-slate-400">{exp.company}</p>
                  </div>
                  <p className="text-sm text-slate-500">{exp.startDate} • {exp.endDate || 'Atualmente'}</p>
                </div>
                <p className="mt-4 text-slate-300 leading-7">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-slate-100">Formação</h2>
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200">{curriculo.formacoes.length} itens</span>
          </div>
          <div className="space-y-4">
            {curriculo.formacoes.map((edu, index) => (
              <div key={index} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
                <p className="text-lg font-semibold text-slate-100">{edu.course}</p>
                <p className="mt-1 text-sm text-slate-400">{edu.institution}</p>
                <p className="mt-3 text-sm text-slate-500">{edu.startDate} • {edu.endDate || 'Presente'}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-3">
            {curriculo.habilidades.map((skill, index) => (
              <span key={index} className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200">{skill}</span>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/sistema/paginas/curriculos" className="inline-flex rounded-2xl bg-zinc-800 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-zinc-700 transition">
            Voltar para a lista
          </Link>
          <Link href="/sistema/paginas/curriculos/novo" className="inline-flex rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-sky-400 transition">
            Novo currículo
          </Link>
        </div>
      </div>
    </div>
  );
}
