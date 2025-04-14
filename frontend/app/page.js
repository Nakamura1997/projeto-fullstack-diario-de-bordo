// app/page.js
'use client'
import styles from './page.module.css'

export default function DiarioDeBordo() {
  return (
    <main className={styles.container}>
      <h1 className={styles.tituloPrincipal}>Diário de Bordo</h1>
      
      {/* Seção de Novo Registro */}
      <section className={styles.novoRegistro}>
        <h2>Novo Registro</h2>
        <form>
          <div className={styles.formGroup}>
            <label><strong>Título</strong></label>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Título do registro"
            />
          </div>
          <div className={styles.formGroup}>
            <label><strong>Conteúdo</strong></label>
            <textarea 
              className={styles.textarea}
              placeholder="O que aconteceu hoje?"
            />
          </div>
          <button 
            type="submit"
            className={styles.botao}
          >
            Salvar Registro
          </button>
        </form>
      </section>

      {/* Seção de Registros Existentes */}
      <section className={styles.mesaRegistros}>
        <h3>Mesa Registros</h3>
        
        <article className={styles.registro}>
          <h4>Primeiro dia no mar</h4>
          <p>Hoje iniciamos nossa jornada. O mar está calmo e a tripulação animada.</p>
          <small className={styles.dataRegistro}>15/04/2024</small>
        </article>

        <article className={styles.registro}>
          <h4>Tempestade na aproximação</h4>
          <p>Nuvens escuras no horizonte. O barômetro indica queda de pressão.</p>
          <small className={styles.dataRegistro}>16/04/2024</small>
        </article>
      </section>
    </main>
  )
}