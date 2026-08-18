/*
  Galeria de fotos da clínica.
  Troque cada objeto do array `photos` por uma foto real:
  1. Coloque o arquivo de imagem em `frontend/public/` (ex: public/fotos/recepcao.jpg)
  2. Troque a prop `src` pelo caminho, ex: src: "/fotos/recepcao.jpg"
  3. Troque `alt` por uma descrição real da foto (importante para acessibilidade)
  4. Remova a prop `placeholder` do item — ela só existe para estilizar o bloco vazio
*/
const photos = [
  { alt: "Recepção da clínica", placeholder: true, span: "md:col-span-2 md:row-span-2" },
  { alt: "Sala de procedimentos", placeholder: true },
  { alt: "Área de espera", placeholder: true },
  { alt: "Estação de atendimento", placeholder: true },
  { alt: "Detalhe da decoração", placeholder: true },
];

export default function ClinicGallery() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Ambiente</p>
      <h2 className="mt-3 font-display text-3xl text-rosewood-dark">Conheça nossa clínica</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[160px]">
        {photos.map((photo, i) =>
          photo.src ? (
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className={`h-full w-full rounded-2xl object-cover ${photo.span ?? ""}`}
            />
          ) : (
            <div
              key={i}
              role="img"
              aria-label={photo.alt}
              className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-blush-deep to-clay/30 md:aspect-auto ${
                photo.span ?? ""
              }`}
            >
              <span className="px-4 text-center text-xs font-medium uppercase tracking-wide text-rosewood-dark/50">
                {photo.alt}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
