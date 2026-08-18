import ClinicGallery from "../components/ClinicGallery.jsx";

export default function Contato() {
  return (
    <>
      <ClinicGallery />

      <section className="mx-auto max-w-xl px-6 pb-24 text-center mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Clínica</p>
        <h1 className="mt-3 font-display text-4xl text-rosewood-dark">Vamos agendar seu horário?</h1>

        <div className="mt-10">
          <a
            href="https://wa.me/message/PUWBHUVOFNNII1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-sm rounded-full px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #7f1d1d, #f472b6)" }}
          >
            Agendar
          </a>
        </div>
      </section>
    </>
  );
}
