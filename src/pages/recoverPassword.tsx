import '../app/globals.css'

import styles from '../app/page.module.css'
import Header from '@/app/components/header'

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