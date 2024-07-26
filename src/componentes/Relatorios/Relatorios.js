import React from 'react';
import './Relatorios.css'; // Importando o arquivo de estilo

function Relatorios({ relatorios, onDelete }) {
  return (
    <div className="relatorios-container">
      <h2 className='text-titulo'>Relatórios</h2>
      <div className="button-container">
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Venda</th>
            <th>Reunião</th>
            <th>Pontos</th>
            <th>Ações</th> {/* Cabeçalho da coluna de ações */}
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio, index) => (
            <tr key={index}>
              <td>{relatorio.empresa}</td>
              <td>{relatorio.data}</td>
              <td>{relatorio.tipo}</td>
              <td>{relatorio.venda ? 'Sim' : 'Não'}</td>
              <td>{relatorio.reuniao ? 'Sim' : 'Não'}</td>
              <td>{relatorio.pontos}</td>
              <td>
                <button onClick={() => onDelete(index)} className="delete-button">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Relatorios;
