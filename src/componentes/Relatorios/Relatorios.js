import React from 'react';
import './Relatorios.css'; // Importando o arquivo de estilo

function Relatorios({ relatorios }) {
  return (
    <div className="relatorios-container"> {/* Adicionando a classe CSS */}
      <h2 className='text-titulo'>Relatórios</h2>
      <table className="table"> {/* Adicionando a classe CSS */}
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Venda</th>
            <th>Reunião</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio, index) => (
            <tr key={index}>
              <td>{relatorio.empresa}</td>
              <td>{relatorio.data}</td>
              <td>{relatorio.tipo}</td>
              <td>{relatorio.venda}</td>
              <td>{relatorio.reuniao}</td>
              <td>{relatorio.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Relatorios;
