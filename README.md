# Yasmin Menezes — Clone estilo Natalia Beauty

Site institucional de estética/beleza inspirado em nataliabeauty.com.br, com identidade
visual própria (rosé/blush + serifada editorial).

## Stack

- **Frontend:** Vite + React + React Router v7 (Declarative Mode) + TailwindCSS v4
- **Backend:** Node.js + Express (API de contato e newsletter)

> Observação: Next.js e NestJS foram deixados de fora porque são alternativas ao par
> Vite/Express, não complementos — usá-los juntos no mesmo projeto duplicaria o roteamento
> e o servidor sem necessidade. Se você quiser migrar depois:
> - Vite + React Router → **Next.js** (App Router substitui o React Router e o Vite)
> - Express → **NestJS** (estrutura o mesmo backend em módulos/controllers/services)

## Como rodar

### 1. Backend (porta 4000)

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend (porta 5173)

```bash
cd frontend
npm install
npm run dev
```

O Vite já está configurado para redirecionar `/api/*` para `http://localhost:4000`
em desenvolvimento (veja `vite.config.js`).

## Estrutura

```
natalia-beauty-clone/
├── backend/
│   ├── server.js        # Express: /api/contact, /api/newsletter, /api/health
│   └── package.json
└── frontend/
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── main.jsx              # Rotas (React Router Declarative Mode)
        ├── index.css             # Tokens de tema (Tailwind v4 @theme)
        ├── components/
        │   ├── Layout.jsx
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── Hero.jsx
        │   ├── Marquee.jsx
        │   ├── AboutClinic.jsx
        │   └── ProceduresGrid.jsx
        └── pages/
            ├── Home.jsx
            ├── Sobre.jsx
            ├── Procedimentos.jsx
            ├── Contato.jsx
            └── NotFound.jsx
```

## Build para produção

```bash
cd frontend && npm run build
```

Isso gera `frontend/dist`, que pode ser servido por qualquer host estático (Netlify, Vercel,
Nginx) ou pelo próprio Express com `express.static`.
