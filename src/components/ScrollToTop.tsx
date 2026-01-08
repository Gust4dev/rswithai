"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Força o scroll para o topo assim que o componente monta
    window.scrollTo(0, 0);

    // Tenta novamente após um pequeno delay para garantir que o layout carregou
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
