import estilos from "./Menu.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export function Menu() {
  const [nav, setNav] = useState(false);

  const openNavegation = () => {
    setNav(!nav);
  };

  const menuLinks = [
    { name: "Home", link: "home" },
    { name: "Acervo", link: "acervo" },
    { name: "Contato", link: "contato" },
  ];
  return (
    <>
      <header>
        <nav className={estilos.styleContainer}>
          <h1 className={estilos.primeiroItem}>B</h1>

          <ul
            className={`${estilos.containerMenu} ${
              nav ? estilos.active : estilos.itens
            }`}
          >
            {menuLinks.map((menu, index) => (
              <li className={estilos.listItem} key={index}>
                <a className={estilos.link} href={`#${menu.link}`}>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <FiAlignJustify
              onClick={openNavegation}
              className={`${estilos.iconBar} ${nav ? estilos.noActive: estilos.iconBar}`}
            />
            <IoMdClose onClick={openNavegation} className={`${estilos.iconBar} ${nav ? estilos.iconBar : estilos.noActive}`}/>
          </div>
        </nav>
      </header>
    </>
  );
}
