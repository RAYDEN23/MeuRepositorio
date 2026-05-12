import * as yup from 'yup';

const experienceSchema = yup.object({
  company: yup.string().required('Nome da empresa é obrigatório'),
  position: yup.string().required('Cargo é obrigatório'),
  startDate: yup.string().required('Data de início obrigatória'),
  endDate: yup.string(),
  description: yup.string().min(30, 'Descreva melhor a experiência (mín. 30 caracteres)'),
});

const educationSchema = yup.object({
  institution: yup.string().required('Instituição obrigatória'),
  course: yup.string().required('Curso obrigatório'),
  startDate: yup.string().required('Data de início obrigatória'),
  endDate: yup.string(),
});

export const curriculumSchema = yup.object({
  nome: yup.string().min(3, 'Nome deve ter pelo menos 3 caracteres').required(),
  cargo: yup.string().required('Cargo desejado é obrigatório'),
  email: yup.string().email('E-mail inválido').required(),
  telefone: yup.string().required('Telefone é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  resumoProfissional: yup.string().min(50, 'Resumo profissional deve ter no mínimo 50 caracteres').required(),
  experiencias: yup.array().of(experienceSchema).min(1, 'Adicione pelo menos uma experiência').required('Experiências são obrigatórias'),
  formacoes: yup.array().of(educationSchema).min(1, 'Adicione pelo menos uma formação').required('Formações são obrigatórias'),
  habilidades: yup.array().of(yup.string().min(2)).min(3, 'Adicione pelo menos 3 habilidades').required('Habilidades são obrigatórias'),
});

export type CurriculumInput = yup.InferType<typeof curriculumSchema>;