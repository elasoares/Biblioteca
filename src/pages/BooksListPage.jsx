import { DetalheDoLivro } from "../components/DetalheDoLivro/DetalheDoLivro";
import { LiaStarSolid } from "react-icons/lia";
import styles from "./BooksListPage.module.css";
import { CardBook } from "../components/CardBook/CardBook";

function BookListPage({ book, className }) {
  return (
    <div className={`${className} ${styles.container}`}>
      
      {book.map((livro) => (

        <CardBook key={livro.id}>
          <img className={styles.capa} src={livro.cover} />
          <div className={styles.dados}>
            <h4 className={styles.titulo}>{livro.title}</h4>
            <p className={styles.estiloCinza}>
              {livro.genre} - {livro.format}
            </p>
            <div className={styles.containerDoAutor}>
              <span className={styles.estiloCinza}>Por</span>{" "}
              <a href="#" className={styles.autor}>
                {livro.author}
              </a>
              <span className={styles.estiloCinza}> Autor(a) </span>
            </div>
            <div className={styles.avaliacao}>
              <p>{livro.rating}</p>
              <LiaStarSolid />
            </div>
          </div>
          <div className={styles.containerDetalhe}>
            <DetalheDoLivro className={styles.detalhe} livro={livro} />
          </div>
        </CardBook>

      ))}

    </div>
  );
}
export default BookListPage;
