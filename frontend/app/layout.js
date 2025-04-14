import './globals.css'
import styles from './page.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className={styles.cabecalho}>
          <h1>Diário de Bordo</h1>
          <p>Meus Registros</p>
        </header>
        
        {children}
        
        <footer className={styles.rodape}>
          Diário de Bordo © {new Date().getFullYear()} - Demonstrata com ✅
        </footer>
      </body>
    </html>
  )
}