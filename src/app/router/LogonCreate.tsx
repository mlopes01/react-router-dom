import { Header } from "./components/header"
import styles from '../page.module.css'

export default function LogonCreate() {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <div>
                    <h1>Página de cadastro</h1>
                </div>
            </main>
        </>
    )
}