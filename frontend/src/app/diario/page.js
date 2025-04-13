'use client'; // Necessário para usar hooks e eventos
import { useState } from 'react';
import axios from 'axios';
import RegistrosMesa from '@/components/RegistrosMesa';
import styles from './page.module.css';

export default function DiarioDeBordo() {
  const [novoRegistro, setNovoRegistro] = useState({
    titulo: '',
    conselho: ''
  });
  const [registros, setRegistros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulando uma API - substitua pela sua URL real
      const response = await axios.post('/api/registros', novoRegistro);
      setRegistros([...registros, response.data]);
      setNovoRegistro({ titulo: '', conselho: '' });
    } catch (error) {
      console.error('Erro ao salvar registro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoRegistro(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Diário de Bordo</h1>

      {/* Formulário com submit */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Novo Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1 text-gray-600">Título</label>
            <input 
              type="text"
              name="titulo"
              value={novoRegistro.titulo}
              onChange={handleChange}
              placeholder="Título do registro" 
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1 text-gray-600">Conselho</label>
            <textarea 
              name="conselho"
              value={novoRegistro.conselho}
              onChange={handleChange}
              placeholder="O que aconteceu hoje?" 
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? 'Salvando...' : 'Salvar Registro'}
          </button>
        </form>
      </section>

      <hr className="my-6 border-gray-200" />

      <section>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Mesa Registros</h3>
        <RegistrosMesa registros={registros} />
      </section>

      <footer className="mt-10 text-center text-sm text-gray-500">
        Diário de Bordo © 2023 - Desenvolvido com @
      </footer>
    </main>
  );
}