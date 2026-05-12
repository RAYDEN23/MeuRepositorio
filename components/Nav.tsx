import Link from 'next/link';

interface NavProps {
  className?: string;
}

export default function Nav({ className = '' }: NavProps) {
  return (
    <nav className={`flex space-x-4 ${className}`}>
      <Link href="/" className="text-blue-600 hover:text-blue-800">
        Início
      </Link>
      <Link href="/sistema/paginas/curriculos" className="text-blue-600 hover:text-blue-800">
        Currículos
      </Link>
      <Link href="/sistema/paginas/curriculos/novo" className="text-blue-600 hover:text-blue-800">
        Novo Currículo
      </Link>
    </nav>
  );
}