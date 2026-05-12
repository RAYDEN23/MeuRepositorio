export interface Experience {
  id?: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Education {
  id?: string;
  institution: string;
  course: string;
  startDate: string;
  endDate?: string;
}

export interface Curriculum {
  id: string;
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  cpf: string;
  resumoProfissional: string;
  experiencias: Experience[];
  formacoes: Education[];
  habilidades: string[];
  foto?: string;
  createdAt: string;
}