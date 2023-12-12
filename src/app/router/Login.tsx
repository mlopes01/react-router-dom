
import { Header } from './components/header'
import styles from '../page.module.css'
export default function Login() {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <div>
                    <h1>Página de Login</h1>
                </div>
            </main>
        </>
    )
}