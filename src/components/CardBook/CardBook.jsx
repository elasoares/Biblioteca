import styles from "./CardBook.module.css";

export function CardBook({ children, props }) {
  return <div className={styles.cardBook}>{children}</div>;
}
