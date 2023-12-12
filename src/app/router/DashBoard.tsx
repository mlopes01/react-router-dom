import { Link } from 'react-router-dom'
import styles from '../page.module.css'
import { Header } from './components/header'

export default function DashBoard() {

    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <div>
                    <h1>Página Inicial</h1>
                </div>
            </main>
        </>
    )
}
