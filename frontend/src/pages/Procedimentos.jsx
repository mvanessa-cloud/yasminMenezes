import ProceduresGrid from "../components/ProceduresGrid.jsx";

export default function Procedimentos() {
  return (
    <div className="pt-12 bg-cream min-h-screen">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-4xl text-rosewood-dark">
          Procedimentos
        </h1>

        {/* Espaço para duas fotos lado a lado */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Foto 1 */}
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-blush border-2 border-dashed border-rosewood/20 flex flex-col items-center justify-center gap-2 text-rosewood/40 transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={`${import.meta.env.BASE_URL}imagens/trabalhando_nataliabaeuty.jpeg`}
              alt="Yasmin Menezes trabalhando"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Foto 2 */}
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-blush border-2 border-dashed border-rosewood/20 flex flex-col items-center justify-center gap-2 text-rosewood/40 transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/imagens/procedimentos-2.jpg"
              alt="Procedimentos 2"
              className="h-full w-full object-cover hidden"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.style.display = 'block';
              }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Foto 2</span>
          </div>
        </div>
      </div>

      <ProceduresGrid showHeader={false} />
    </div>
  );
}
