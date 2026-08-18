import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Estética & bem-estar
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-rosewood-dark md:text-6xl">
            Sua beleza não precisa de,
            <br />
            <span className="italic text-clay">padrões</span> precisa de cuidado.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Rompemos com padrões e celebramos a beleza em todas as suas formas, valorizando a autenticidade e a individualidade de cada pessoa. Porque cuidar da sua beleza é reconhecer sua essência, realçar o que há de único em você e transformar cada detalhe em confiança e autoestima.
          </p>


          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/quem-somos"
              className="rounded-full bg-rosewood px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rosewood-dark"
            >
              Saiba mais
            </Link>

           



          </div>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[3rem] bg-gradient-to-br from-blush-deep to-clay/40 md:justify-self-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-8xl text-rosewood-dark/20">BA</span>
          </div>
        </div>
      </div>

      {/* elemento de assinatura: leve textura orgânica no fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-clay/10 blur-3xl"
      />
    </section>
  );
}
