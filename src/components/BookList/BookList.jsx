import { useState, useEffect } from "react";
import BooksListPage from "../../pages/BooksListPage";
import styles from "../BookList/BookList.module.css";
import { CiSearch } from "react-icons/ci";

export function BookList() {
  const [livros, setLivros] = useState();
  const [livrosPesquisados, setLivrosPesquisados] = useState("");
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  const [pesquisaAtiva, setPesquisaAtiva] = useState(false);

  const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
  const recurso = "/books.json";
  const uri = url + recurso;
  const tratarError = (erro) => console.error(`Erro ao obter dados: ${erro}`);

  useEffect(() => {
    async function requisitarLivros() {
      try {
        const fetchRequisitar = await fetch(uri);
        if(!fetchRequisitar.ok){
          throw new Error('Falha ao obter os dados dos livros');
        }
        const fetchParaJson = await fetchRequisitar.json();
        const desestruturar = desestruturacao(fetchParaJson);
        setLivros(desestruturar);
        setLivrosFiltrados(desestruturar);
      } catch (erro) {
        tratarError(erro);
        alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.');
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
        height={50}
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXRyMWszZThuYXBiem91YnYyejJ6dGNmbDFicHFrdnhhdHgycWcyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
      />
    );
  }

  const changeInput = (event) => {
    const valorDigitado = event.target.value
    setLivrosPesquisados(valorDigitado);
    console.log("Valor digitado:", valorDigitado);

  };

  const filtrando = () => {
    const livrosFiltrados = livros.filter(
      (livro) =>
        livro.title.toLowerCase().includes(livrosPesquisados.toLowerCase()) ||
        livro.author.toLowerCase().includes(livrosPesquisados.toLowerCase()) ||
        livro.genre.toLowerCase().includes(livrosPesquisados.toLowerCase()),
    );
    console.log("Livros filtrados:", livrosFiltrados); 
    setLivrosFiltrados(livrosFiltrados);
   /*  setLivrosPesquisados(""); */
    setPesquisaAtiva(true);
  };

  return (
    <div>
      <div className={styles.containerInput}>
        
        <input
        data-cy='inputPesquisa'
          value={livrosPesquisados}
          type="text"
          placeholder="Pesquise aqui seu livro"
          onChange={changeInput}
        />
        <CiSearch data-cy='botaoPesquisa' className={styles.search} onClick={filtrando} />
      </div>
      <div >
  <BooksListPage className={styles.container} book={livrosFiltrados} />
</div>

    </div>
  );
}
