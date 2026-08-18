import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Procedimentos from "./pages/Procedimentos.jsx";
import Procedimento from "./pages/Procedimento.jsx";
import Contato from "./pages/Contato.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<Sobre />} />
          <Route path="procedimentos" element={<Procedimentos />} />
          <Route path="procedimento/:slug" element={<Procedimento />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
