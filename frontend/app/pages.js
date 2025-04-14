// app/page.js
'use client' // Permite usar hooks e estados

export default function DiarioDeBordo() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#1a365d' }}>Diário de Bordo</h1>
      
      {/* Seção de Novo Registro */}
      <section style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>Novo Registro</h2>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Título</strong></label><br/>
            <input 
              type="text" 
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              placeholder="Título do registro"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label><strong>Conteúdo</strong></label><br/>
            <textarea 
              style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}
              placeholder="O que aconteceu hoje?"
            />
          </div>
          <button 
            type="submit"
            style={{ background: '#4299e1', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px' }}
          >
            Salvar Registro
          </button>
        </form>
      </section>

      {/* Seção de Registros Existentes */}
      <section>
        <h3>Mesa Registros</h3>
        
        <article style={{ background: 'white', padding: '15px', borderRadius: '5px', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h4>Primeiro dia no mar</h4>
          <p>Hoje iniciamos nossa jornada. O mar está calmo e a tripulação animada. Vimos golfinhos ao amanhecer.</p>
          <small style={{ display: 'block', textAlign: 'right', color: '#718096' }}>15/04/2024</small>
        </article>

        <article style={{ background: 'white', padding: '15px', borderRadius: '5px', marginBottom: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h4>Tempestade na aproximação</h4>
          <p>Nuvens escuras no horizonte. O barômetro indica queda de pressão. Preparando o navio para possível tempestade.</p>
          <small style={{ display: 'block', textAlign: 'right', color: '#718096' }}>16/04/2024</small>
        </article>
      </section>
    </main>
  )
}