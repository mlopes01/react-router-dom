import { Header } from "./components/header"
import styles from '../page.module.css'

export default function Profile() {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <div>
                    <h1>Página de Perfil</h1>
                </div>
            </main>
        </>
    )
}