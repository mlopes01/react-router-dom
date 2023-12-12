import { Header } from "./components/header"
import styles from '../page.module.css'

export default function RecoverPassword() {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <div>
                    <h1>Recuperar Senha</h1>
                </div>
            </main>
        </>
    )
}