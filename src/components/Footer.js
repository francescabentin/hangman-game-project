import '../styles/components/_footer.scss';
import { NavLink } from "react-router-dom";

const Footer = () => {

  return (

    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink
              to="#/A Jugar"
              className={({ isActive, isPending }) =>
                isPending ? "footer__menu-link active" : isActive ? "footer__menu-link" : ""
              }
            > A jugar</NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="#/instructions"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "footer__menu-link active" : "footer__menu-link"
              }
            >¿Cómo se juega? </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="#/options"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "footer__menu-link active" : "footer__menu-link"
              }
            >Más opciones </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  )
}


export default Footer;
