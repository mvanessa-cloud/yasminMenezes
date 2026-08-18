import { Link } from "react-router-dom";

const procedures = [
  { slug: "extencao-de-cilios", name: "Extensão de Cílios" },
  {
    slug: "micropigmentacao",
    name: "Micropigmentação",
    tag: "Natalia Beauty, fio a fio",
  },
  { slug: "henna", name: "Henna" },
  {
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
  },
  { slug: "brow-lamination", name: "Brow Lamination" },
  { slug: "lash-lifting", name: "Lash Lifting" },
  { slug: "limpeza-de-pele", name: "Limpeza de Pele" },
  { slug: "revitalizacao", name: "Revitalização" },
  { slug: "massagem-relaxante", name: "Massagem Relaxante" },
  { slug: "remocao-de-cilios", name: "Remoção de Cílios" },
];

export default function ProceduresGrid({ showHeader = true, isHome = false }) {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho */}
        {showHeader && (
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">

            {/* Texto */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
                Técnicas
              </p>

              <h2 className="mt-3 font-display text-3xl text-rosewood-dark md:text-4xl">
                Conheça os procedimentos
              </h2>

              <p className="mt-4 text-base leading-relaxed text-ink/60">
                Cada detalhe pensado para você
              </p>

              <p className="mt-4 text-base leading-relaxed text-ink/60">
                Cuidado, precisão e atenção em cada etapa. Conheça as técnicas
                pensadas para oferecer a você uma experiência segura,
                personalizada e acolhedora.
              </p>

              <Link
                to="/procedimentos"
                className="mt-6 inline-block border-b-2 border-rosewood pb-1 text-sm font-semibold text-rosewood-dark transition-colors hover:text-clay"
              >
                Conheça nossos procedimentos →
              </Link>
            </div>

            {/* Foto */}
            <div className="flex-shrink-0 md:w-72 lg:w-80">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-blush">
                <img
                  src="/imagens/.jpg"
                  alt="Procedimentos estéticos"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Lista de procedimentos */}
        {!isHome && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <article
                key={p.slug}
                className="group rounded-2xl border border-rosewood/10 bg-blush p-6 transition-shadow hover:shadow-lg hover:shadow-rosewood/5"
              >
                {/* Tag */}
                {p.tag && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-clay">
                    {p.tag}
                  </span>
                )}

                {/* Nome */}
                <h3 className="mt-3 font-display text-xl text-rosewood-dark">
                  {p.name}
                </h3>

                {/* Link */}
                <Link
                  to={`/procedimento/${p.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-rosewood-dark/70 transition-colors group-hover:text-rosewood"
                >
                  Saiba mais →
                </Link>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}