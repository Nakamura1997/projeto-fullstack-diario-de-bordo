'use client'
import styles from './page.module.css'

export default function DiarioDeBordo() {
  return (
    <main className={styles.container}>
      {/* Seção de Novo Registro */}
      <section className={styles.novoRegistro}>
        <h2>Novo Registro</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Título:</label>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Título de negócio"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Contador:</label>
            <textarea 
              className={styles.textarea}
              placeholder="O que aconteceu aqui?"
            />
          </div>
          <button 
            type="submit"
            className={styles.botao}
          >
            Salvar
          </button>
        </form>
      </section>

      {/* Seção de Registros */}
      <section className={styles.mesaRegistros}>
        <h3>Mesa Registros</h3>
        
        <article className={styles.registro}>
          <h4>Primeiro dia no mar</h4>
          <p>Hoje nenhum nome jamais. O mar está como o a tipulação animada. Vemos golfinhos ao entendecer o o dos cítios acolos.</p>
        </article>

        <article className={styles.registro}>
          <h4>Torquistade na aproximação</h4>
          <p>Naturava novas mesas na batacasa. O banheiro indica queda de pressão. Programa e aviso para possível terapeutado nos próximos locais.</p>
        </article>

        <article className={styles.registro}>
          <h4>Chegada ao porto</h4>
          <p>Após três dias de recepção, finalmente evidences o porto. A tipulação está cansada nas colicidas com a jornada. Acusada incoerente e descarregamento.</p>
        </article>
      </section>
    </main>
  )
}