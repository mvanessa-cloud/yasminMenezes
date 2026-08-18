const items = [
  "Micropigmentação",
  "Extensão de cílios",
  "Design de sobrancelhas",
  "Henna",
  "Lash lifting",
  "Brow lamination",
  "Revitalização",
  "Limpeza de pele",
  "Massagem relaxante",
  "Remoção de cílios"
  
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-rosewood/10 bg-blush-deep/60 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg text-rosewood-dark/70">
            {item}
            <span aria-hidden="true" className="text-clay">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
