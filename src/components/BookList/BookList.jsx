import { useState, useEffect } from "react";
import BooksListPage from "../../pages/BooksListPage";
import styles from "../BookList/BookList.module.css";

export function BookList() {
  const [livros, setLivros] = useState();
  const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
  const recurso = "/books.json";
  const uri = url + recurso;
  const tratarError = (erro) => console.error(`Erro ao obter dados: ${erro}`);

  useEffect(() => {
    async function requisitarLivros() {
      try {
        const fetchRequisitar = await fetch(uri);
        const fetchParaJson = await fetchRequisitar.json();
        const desestruturar = desestruturacao(fetchParaJson);
        setLivros(desestruturar);
      } catch (erro) {
        tratarError(erro);
      }
    }
    requisitarLivros();
  }, []);

  function desestruturacao(dados) {
    const ids = Object.keys(dados);
    const dadosLivros = Object.values(dados);
    return dadosLivros.map((valores, index) => {
      return { id: ids[index], ...valores };
    });
  }

  if (!livros) {
    return (
      <img
        width={50}
        src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif"
      />
    );
  }

  return (
    <div className={styles.container}>
      <BooksListPage book={livros} />
    </div>
  );
}
