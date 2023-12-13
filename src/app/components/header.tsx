import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


import styles from './Header.module.css'
import Link from 'next/link';


export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <span><FontAwesomeIcon icon={faCircleUser} /></span>
                <p>Nome da Empresa</p>
            </div>
            <nav className={styles.nav}><Link href="../">Home</Link>
                <Link href="../profile"> Perfil</Link>
                <Link href="../login">Login </Link>
                <Link href="../createLogin"> Cadastro</Link>
                <Link href="../recoverPassword"> RecuperarSenha</Link>
            </nav>
        </header>
    )
}