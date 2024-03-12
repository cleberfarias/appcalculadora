import React, { useState } from 'react';
import './Formulario.css'; // Importando o arquivo de estilo

function Formulario({ onFormSubmit }) {
  const [empresa, setEmpresa] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState('');
  const [venda, setVenda] = useState(false);
  const [reuniao, setReuniao] = useState(false);
  const [inputSalario, setInputSalario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ empresa, data, tipo, venda, reuniao, inputSalario });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> {/* Adicionando a classe CSS */}
      <h2 className='texto-form' >Relatório de Pré-Vendas</h2>
      <label type="text" className='texto-form'>informe seu Salário</label>
      <input type="text" placeholder="Salário" value={inputSalario} onChange={(e) => setInputSalario(e.target.value)} className="input-field" /> {/* Adicionando a classe CSS */}
      <label type="text" className='texto-form'>Cadastrar Empresa</label>
      <input type="text" placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className="input-field" /> {/* Adicionando a classe CSS */}
      <label type="text" className='texto-form'>Mês e Ano</label>
      <input type="text" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} className="input-field" /> {/* Adicionando a classe CSS */}
      <label type="text" className='texto-form'>Origem do Lead</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="input-field"> {/* Adicionando a classe CSS */}
        <option value="" className='texto-form'>Selecione o tipo</option>
        <option value="GOOGLE ADS">GOOGLE ADS</option>
        <option value="FALECONOSCO">FALECONOSCO</option>
        <option value="TELEFONE">TELEFONE</option>
        <option value="INDICAÇÕES">INDICAÇÕES</option>
        <option value="EBOOK">EBOOK</option>
        <option value="WEBINAR">WEBINAR</option>
        <option value="EVENTO">EVENTO</option>
        <option value="BASE">BASE</option>
        <option value="OUTBOUND">OUTBOUND</option>
      </select>
      <label className="label">
        Venda:
        <input type="checkbox" checked={venda} onChange={(e) => setVenda(e.target.checked)} className="checkbox" /> {/* Adicionando a classe CSS */}
      </label>
      <label className="label">
        Reunião:
        <input type="checkbox" checked={reuniao} onChange={(e) => setReuniao(e.target.checked)} className="checkbox" /> {/* Adicionando a classe CSS */}
      </label>
      
      <button type="submit" className="submit-button">Cadastrar</button> {/* Adicionando a classe CSS */}
    </form>
  );
}

export default Formulario;
