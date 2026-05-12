import { Curriculum } from './types';

export const getCurriculos = (): Curriculum[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('curriculos');
  return data ? JSON.parse(data) : [];
};

export const saveCurriculo = (curriculo: Curriculum) => {
  const curriculos = getCurriculos();
  curriculos.push(curriculo);
  localStorage.setItem('curriculos', JSON.stringify(curriculos));
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};