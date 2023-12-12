import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <span><FontAwesomeIcon icon={faCircleUser} /></span>
                <p>Nome da Empresa</p>
            </div>
            <nav className={styles.nav}><Link to="/">Home</Link>
                <Link to="/perfil">Perfil </Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro </Link>
                <Link to="/recuperarSenha">RecuperarSenha </Link>
            </nav>
        </header>
    )
}