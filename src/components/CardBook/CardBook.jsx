import styles from "./CardBook.module.css";

export function CardBook({ children, props }) {
  return <div data-cy="livrosCadastrados" className={styles.cardBook}>{children}</div>;
}
