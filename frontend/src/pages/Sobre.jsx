export default function Sobre() {
  const fotos = [
    { src: "/imagens/sobre-1.jpg", label: "Foto 1" },
    { src: "/imagens/sobre-2.jpg", label: "Foto 2" },
    { src: "/imagens/sobre-3.jpg", label: "Foto 3" },
    { src: "/imagens/sobre-4.jpg", label: "Foto 4" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      {/* 4 Fotos antes do texto */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
        {fotos.map((foto, index) => (
          <div
            key={index}
            className="aspect-[3/4] overflow-hidden rounded-2xl bg-blush border-2 border-dashed border-rosewood/20 flex flex-col items-center justify-center gap-2 text-rosewood/40 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={foto.src}
              alt={`Yasmin Menezes ${index + 1}`}
              className="h-full w-full object-cover hidden"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              onLoad={(e) => {
                e.currentTarget.style.display = "block";
              }}
            />
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-medium">{foto.label}</span>
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="mt-14 max-w-3xl mx-auto text-center md:text-left">
        <h2 className="font-display text-3xl text-rosewood-dark md:text-4xl">
          Minha história
        </h2>

        <p className="mt-6 leading-relaxed text-ink/70 text-lg">
          Minha história na estética começou aos 16 anos, quando ganhei meu
          primeiro curso de Design de Sobrancelhas, da querida Leidy Alves.
          O que começou como uma oportunidade se tornou uma paixão.
        </p>

        <p className="mt-4 leading-relaxed text-ink/70 text-lg">
          Busquei novos conhecimentos e estou terminando como Técnica em
          Estética, sempre buscando aperfeiçoar meu trabalho e oferecer um
          atendimento acolhedor e personalizado.
        </p>

        <p className="mt-4 leading-relaxed text-ink/70 text-lg">
          Hoje, também estudo Enfermagem, unindo meus dois grandes
          propósitos: a beleza e o cuidado com as pessoas.
        </p>

        <p className="mt-4 leading-relaxed text-ink/70 text-lg">
          Acredito que cada pessoa possui uma beleza única e que meu papel é
          valorizar sua essência, sua autoestima e seu bem-estar.
        </p>
      </div>
    </section>
  );
}