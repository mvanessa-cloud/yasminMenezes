import { Link } from "react-router-dom";

export default function AboutClinic() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">

        {/* Imagem */}
        <div className="order-2 aspect-square overflow-hidden rounded-[2.5rem] bg-blush-deep md:order-1">
          <img
            src="/imagens/.jpg"
            alt="Yasmin Menezes"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Nossa clínica
          </p>

          <h2 className="mt-3 font-display text-3xl text-rosewood-dark md:text-4xl">
            Cuidado que valoriza sua beleza e sua essência.
          </h2>

          <p className="mt-5 leading-relaxed text-ink/70">
            Cada atendimento realizado por Yasmin é pensado especialmente para
            você. Com olhar atento, dedicação e carinho em cada detalhe, ela
            busca compreender suas necessidades e proporcionar uma experiência
            acolhedora, personalizada e segura. Mais do que realizar um
            procedimento, Yasmin acredita na importância de ouvir, cuidar e
            valorizar cada pessoa em sua individualidade. Seu propósito é
            realçar a beleza natural, fortalecer a autoestima e fazer com que
            você se sinta ainda mais confiante e especial.
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-6">
            <Link
              to="/contato"
              className="border-b-2 border-rosewood pb-1 text-sm font-semibold text-rosewood-dark transition-colors hover:text-clay"
            >
              Conheça a clínica →
            </Link>

            
          </div>
        </div>

      </div>
    </section>
  );
}