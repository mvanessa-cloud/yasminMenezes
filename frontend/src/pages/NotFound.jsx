import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-md px-6 py-32 text-center">
      <p className="font-display text-6xl text-rosewood-dark">404</p>
      <p className="mt-4 text-ink/70">Página não encontrada.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-rosewood-dark underline">
        Voltar para a home
      </Link>
    </section>
  );
}
