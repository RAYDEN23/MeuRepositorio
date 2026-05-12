'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { curriculumSchema, CurriculumInput } from '@/lib/schema';

const NovoCurriculoPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<CurriculumInput>({
    nome: '',
    cargo: '',
    email: '',
    telefone: '',
    cpf: '',
    resumoProfissional: '',
    experiencias: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    formacoes: [
      {
        institution: '',
        course: '',
        startDate: '',
        endDate: '',
      },
    ],
    habilidades: ['', '', ''],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setExperienceField = (index: number, field: keyof CurriculumInput['experiencias'][number], value: string) => {
    setFormData((current) => {
      const experiencias = [...current.experiencias];
      experiencias[index] = { ...experiencias[index], [field]: value };
      return { ...current, experiencias };
    });
  };

  const setEducationField = (index: number, field: keyof CurriculumInput['formacoes'][number], value: string) => {
    setFormData((current) => {
      const formacoes = [...current.formacoes];
      formacoes[index] = { ...formacoes[index], [field]: value };
      return { ...current, formacoes };
    });
  };

  const setSkill = (index: number, value: string) => {
    setFormData((current) => {
      const habilidades = [...current.habilidades];
      habilidades[index] = value;
      return { ...current, habilidades };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validated = await curriculumSchema.validate(formData, { abortEarly: false, stripUnknown: true });
      const currentList = typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('curriculos') || '[]')
        : [];
      const newCurriculo = {
        ...validated,
        id: typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : String(Date.now()),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('curriculos', JSON.stringify([...currentList, newCurriculo]));
      router.push('/sistema/paginas/curriculos');
    } catch (validationError: unknown) {
      const errorMap: Record<string, string> = {};
      if (validationError && typeof validationError === 'object' && 'inner' in validationError) {
        // @ts-expect-error yup typing
        validationError.inner.forEach((error: { path?: string; message: string }) => {
          if (error.path) {
            errorMap[error.path] = error.message;
          }
        });
      }
      setErrors(errorMap);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-slate-100">Cadastrar Novo Currículo</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Nome</label>
          <input
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
          />
          {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Cargo Desejado</label>
          <input
            type="text"
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
          />
          {errors.cargo && <p className="text-red-400 text-sm mt-1">{errors.cargo}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Telefone</label>
          <input
            type="text"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
          />
          {errors.telefone && <p className="text-red-400 text-sm mt-1">{errors.telefone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">CPF</label>
          <input
            type="text"
            value={formData.cpf}
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
            className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
          />
          {errors.cpf && <p className="text-red-400 text-sm mt-1">{errors.cpf}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Resumo Profissional</label>
          <textarea
            value={formData.resumoProfissional}
            onChange={(e) => setFormData({ ...formData, resumoProfissional: e.target.value })}
            className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
            rows={4}
          />
          {errors.resumoProfissional && <p className="text-red-400 text-sm mt-1">{errors.resumoProfissional}</p>}
        </div>

        <div className="grid gap-4">
          <h2 className="text-xl font-semibold text-slate-100">Experiência</h2>
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Empresa"
              value={formData.experiencias[0].company}
              onChange={(e) => setExperienceField(0, 'company', e.target.value)}
              className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
            />
            <input
              type="text"
              placeholder="Cargo"
              value={formData.experiencias[0].position}
              onChange={(e) => setExperienceField(0, 'position', e.target.value)}
              className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Data de início"
                value={formData.experiencias[0].startDate}
                onChange={(e) => setExperienceField(0, 'startDate', e.target.value)}
                className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="Data de fim"
                value={formData.experiencias[0].endDate}
                onChange={(e) => setExperienceField(0, 'endDate', e.target.value)}
                className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
              />
            </div>
            <textarea
              placeholder="Descrição da experiência"
              value={formData.experiencias[0].description}
              onChange={(e) => setExperienceField(0, 'description', e.target.value)}
              className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
              rows={4}
            />
          </div>
        </div>

        <div className="grid gap-4">
          <h2 className="text-xl font-semibold text-slate-100">Formação</h2>
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Instituição"
              value={formData.formacoes[0].institution}
              onChange={(e) => setEducationField(0, 'institution', e.target.value)}
              className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
            />
            <input
              type="text"
              placeholder="Curso"
              value={formData.formacoes[0].course}
              onChange={(e) => setEducationField(0, 'course', e.target.value)}
              className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Data de início"
                value={formData.formacoes[0].startDate}
                onChange={(e) => setEducationField(0, 'startDate', e.target.value)}
                className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="Data de fim"
                value={formData.formacoes[0].endDate}
                onChange={(e) => setEducationField(0, 'endDate', e.target.value)}
                className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <h2 className="text-xl font-semibold text-slate-100">Habilidades</h2>
          {formData.habilidades.map((skill, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Habilidade ${index + 1}`}
              value={skill}
              onChange={(e) => setSkill(index, e.target.value)}
              className="w-full p-3 border border-zinc-800 rounded-2xl bg-zinc-900 text-slate-100 placeholder:text-slate-500 focus:border-sky-500"
            />
          ))}
        </div>

        <button type="submit" className="w-full bg-sky-500 text-zinc-950 py-3 rounded-2xl hover:bg-sky-400 transition">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NovoCurriculoPage;
