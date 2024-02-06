import { useState } from "react";
import styles from "./DetalheDoLivro.module.css";

export function DetalheDoLivro({ livro, className }) {
  const [mostrarDetalhe, setMostrarDetalhe] = useState(false);

  function toggle() {
    setMostrarDetalhe(!mostrarDetalhe);
  }
  return (
    <div>
      {mostrarDetalhe && (
        <div>
          <p className={styles.livro}>{livro.synopsis}</p>
        </div>
      )}
      <a className={className} href="#" onClick={toggle}>
        {mostrarDetalhe ? "Ver menos detalhe" : "Ver mais detalhe"}
      </a>
    </div>
  );
}
