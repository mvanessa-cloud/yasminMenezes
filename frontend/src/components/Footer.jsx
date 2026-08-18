export default function Footer() {
  return (
    <footer className="bg-rosewood-dark text-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">
              Yasmin<span className="italic text-clay"> Menezes</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Beleza sem padrão, impacto sem limites. Cuidado estético com técnica e sensibilidade.
            </p>
          </div>


        
          <div>
            <h3 className="font-display text-lg">Atendimento</h3>
            <ul className="mt-2 space-y-1 text-sm text-cream/70">
              <li>+55 (12) 98201-9008 — whatsapp</li>
              <li>seg. a sex. · 9h às 19h</li>
              <li>sáb · 9h às 14h</li>
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="https://www.instagram.com/designermenezess/#" target="_blank" rel="noopener noreferrer" className="hover:text-clay">Instagram</a>
              <a href="https://wa.me/message/PUWBHUVOFNNII1" target="_blank" rel="noopener noreferrer" className="hover:text-clay">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} Yasmin Menezes. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
