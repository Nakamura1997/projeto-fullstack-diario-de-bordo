export default function RegistrosMesa({ registros = [] }) {
    return (
      <div className="space-y-4">
        {registros.length === 0 ? (
          <p className="text-gray-500">Nenhum registro cadastrado ainda.</p>
        ) : (
          registros.map((registro, index) => (
            <div key={index} className="border border-gray-200 rounded p-4">
              <h4 className="font-bold text-gray-800">{registro.titulo}</h4>
              <p className="text-gray-600 mt-1">{registro.conselho}</p>
            </div>
          ))
        )}
      </div>
    );
  }