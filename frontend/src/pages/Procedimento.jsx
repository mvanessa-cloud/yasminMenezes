import { useParams, Link } from "react-router-dom";

const procedimentos = [
  {
    slug: "extencao-de-cilios",
    name: "Extensão de Cílios",
    descricao:
      "A extensão de cílios é uma técnica que aplica fios sintéticos individualmente em cada cílio natural, proporcionando volume, comprimento e curvatura personalizados. O resultado é um olhar mais expressivo e marcante sem precisar de maquiagem.",
    detalhes: [
      "Duração: 1h30 a 2h",
      "Retoques a cada 3-4 semanas",
      "Fios sintéticos de alta qualidade",
      "Técnica fio a fio",
    ],
    imagens: [],
  },

  {
    slug: "micropigmentacao",
    name: "Micropigmentação",
    descricao:
      "A micropigmentação é um procedimento de beleza semipermanente que deposita pigmento na camada superficial da pele, definindo e realçando sobrancelhas com naturalidade e precisão.",
    detalhes: [
      "Técnica: Natalia Beauty, fio a fio",
      "Duração: 1h30",
      "Resultado dura de 1 a 2 anos",
      "Inclui retoque de revisão",
    ],
    imagens: [
      "/imagens/antes_micro.png",
      "/imagens/depois_micro.png",
    ],
  },

  {
    slug: "henna",
    name: "Henna",
    descricao:
      "A henna é uma técnica de coloração natural que define e preenche falhas nas sobrancelhas, criando um efeito de maior densidade e moldando o formato ideal para o seu rosto. É uma opção prática e natural.",
    detalhes: [
      "Duração: 45 min",
      "Efeito dura até 20 dias na pele",
      "Coloração natural",
      "Sem substâncias agressivas",
    ],
    imagens: [],
  },

  {
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    descricao:
      "O design de sobrancelhas é um procedimento que modela e define o formato das sobrancelhas de acordo com as características do rosto, valorizando o olhar e harmonizando os traços faciais.",
    detalhes: [
      "Duração: 30 min",
      "Técnicas: navalha, cera ou pinça",
      "Personalizado para cada rosto",
      "Acabamento preciso",
    ],
    imagens: [],
  },

  {
    slug: "brow-lamination",
    name: "Brow Lamination",
    descricao:
      "O brow lamination é um tratamento que alinha, levanta e fixa os fios das sobrancelhas em uma posição uniforme e volumosa, criando o efeito de sobrancelhas mais cheias, penteadas e simétricas.",
    detalhes: [
      "Duração: 45 min",
      "Efeito dura de 6 a 8 semanas",
      "Fios alinhados e volumosos",
      "Não danifica os fios naturais",
    ],
    imagens: [],
  },

  {
    slug: "lash-lifting",
    name: "Lash Lifting",
    descricao:
      "O lash lifting é um procedimento que curva e levanta os cílios naturais de dentro para fora, criando um efeito de olhos mais abertos e expressivos. Não utiliza cílios postiços e o resultado é totalmente natural.",
    detalhes: [
      "Duração: 1h a 1h30",
      "Efeito dura de 6 a 8 semanas",
      "Sem cílios postiços",
      "Pode ser combinado com tintura",
    ],
    imagens: [],
  },

  {
    slug: "limpeza-de-pele",
    name: "Limpeza de Pele",
    descricao:
      "A limpeza de pele é um tratamento estético que remove impurezas, cravos e células mortas da superfície da pele, desobstruindo os poros e deixando o rosto mais limpo, suave e radiante.",
    detalhes: [
      "Duração: 1h a 1h30",
      "Recomendada a cada 60-90 dias",
      "Inclui extração e máscara",
      "Para todos os tipos de pele",
    ],
    imagens: [],
  },

  {
    slug: "revitalizacao",
    name: "Revitalização",
    descricao:
      "A revitalização facial é um tratamento que nutre e hidrata profundamente a pele, estimulando a renovação celular e devolvendo o viço, a luminosidade e a elasticidade ao rosto.",
    detalhes: [
      "Duração: 45 min",
      "Indicada para pele opaca ou ressecada",
      "Ativos hidratantes e antioxidantes",
      "Resultados imediatos",
    ],
    imagens: [],
  },

  {
    slug: "massagem-relaxante",
    name: "Massagem Relaxante",
    descricao:
      "A massagem relaxante alivia tensões musculares, reduz o estresse e promove bem-estar geral. Com movimentos suaves e rítmicos, proporciona relaxamento profundo para corpo e mente.",
    detalhes: [
      "Duração: 1h30 a 3h",
      "Óleos aromáticos naturais",
      "Ambiente tranquilo e acolhedor",
    ],
    imagens: [],
  },

  {
    slug: "remocao-de-cilios",
    name: "Remoção de Cílios",
    descricao:
      "A remoção de cílios é um procedimento seguro que retira as extensões de cílios aplicadas anteriormente, utilizando produtos específicos que dissolvem a cola sem causar danos aos cílios naturais.",
    detalhes: [
      "Duração: 40 min",
      "Processo seguro e indolor",
      "Sem danos aos cílios naturais",
      "Recomendado por profissional",
    ],
    imagens: [],
  },
];

export default function Procedimento() {
  const { slug } = useParams();

  const proc = procedimentos.find(
    (procedimento) => procedimento.slug === slug
  );

  if (!proc) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6">
        <h1 className="font-display text-3xl text-rosewood-dark">
          Procedimento não encontrado
        </h1>

        <Link
          to="/procedimentos"
          className="text-sm font-semibold text-rosewood underline"
        >
          Ver procedimentos
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section
        className="relative flex items-end px-6 py-24"
        style={{
          background:
            "linear-gradient(to right, #3b0a0a, #7f1d1d, #f472b6)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl">
          <Link
            to="/procedimentos"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            ← Voltar
          </Link>

          <h1 className="font-display text-4xl text-white md:text-5xl">
            {proc.name}
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-ink/80">
          {proc.descricao}
        </p>

        {/* Galeria */}
        <div className="mt-12">
          <h2 className="mb-6 font-display text-xl text-rosewood-dark">
            Galeria
          </h2>

          <div className="grid max-w-md grid-cols-2 gap-4">
            {proc.imagens.length > 0 ? (
              proc.imagens.map((src, index) => (
                <div
                  key={src}
                  className="aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt={`${proc.name} - imagem ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))
            ) : (
              [1, 2].map((numero) => (
                <div
                  key={numero}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-rosewood/20 bg-blush text-rosewood/40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2v12a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="text-xs font-medium">
                    Foto em breve
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Informações */}
        <div className="mt-12 rounded-2xl border border-rosewood/10 bg-blush p-8">
          <h2 className="mb-6 font-display text-xl text-rosewood-dark">
            Informações
          </h2>

          <ul className="grid gap-3 sm:grid-cols-2">
            {proc.detalhes.map((detalhe) => (
              <li
                key={detalhe}
                className="flex items-start gap-2 text-sm text-ink/70"
              >
                <span className="mt-0.5 text-rosewood">✦</span>
                {detalhe}
              </li>
            ))}
          </ul>
        </div>

        {/* Botões */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://wa.me/message/PUWBHUVOFNNII1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(to right, #7f1d1d, #f472b6)",
            }}
          >
            Agendar
          </a>

          <Link
            to="/procedimentos"
            className="rounded-full border border-rosewood/30 px-8 py-3 text-sm font-semibold text-rosewood-dark transition-colors hover:bg-rosewood/5"
          >
            Ver todos os procedimentos
          </Link>
        </div>
      </section>
    </main>
  );
}