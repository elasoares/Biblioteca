import estilos from "../Menu/Menu.module.css";
import { CiSearch } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";

export function Menu() {
  /* const Button = styled.button`
    background-color: #6f1d1b;
    border: 1px solid #fefae0;
    color: #fefae0;
    cursor: pointer;
    padding: 10px;
    border-radius: 3px;
    transition: all 200ms ease-in-out;
    &:hover {
      filter: brightness(0.85);
    }
  `; */

  return (
    <>
      <header>
        <nav>
          <ul className={estilos.styleContainer}>
            <li className={estilos.primeiroItem}>B</li>
            <li>
              <div className={estilos.containerIcon}>
                <input className={estilos.segundoItem} type="search" />
                <span className={estilos.iconItem}>
                  <CiSearch />
                </span>
              </div>
            </li>
            <li className={estilos.itens}>Home</li>
            <li className={estilos.itens}>Acervo</li>
            <li className={`${estilos.contato} ${estilos.itens}`}>Contato</li>
            <li>
              <FiAlignJustify className={estilos.iconBar} />{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
