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
    // Verificar se todos os campos estão preenchidos
    if (empresa && data && tipo && inputSalario) {
      // Enviar os dados para a função de envio
      onFormSubmit({ empresa, data, tipo, venda, reuniao, inputSalario });
      // Limpar os campos após o envio
      setEmpresa('');
      setData('');
      setTipo('');
      setVenda(false);
      setReuniao(false);
      setInputSalario('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleClear = () => {
    // Limpar todos os campos
    setEmpresa('');
    setData('');
    setTipo('');
    setVenda(false);
    setReuniao(false);
    setInputSalario('');
  };

  const handleDelete = () => {
    // Adicionar lógica para excluir aqui
    // Esta função seria fornecida pelo componente pai
    // Por enquanto, apenas exibiremos um alerta
    alert('Excluir registro...');
  };

  // Função para formatar o salário como moeda (formato de real)
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  // Função para formatar a data no formato mês/ano
  const formatDate = (date) => {
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className='texto-form'>Relatório de Pré-Vendas</h2>
      <label className='texto-form'>Informe seu Salário</label>
      <input
        type="text"
        placeholder="Salário"
        value={inputSalario}
        onChange={(e) => setInputSalario(e.target.value)}
        className="input-field"
      />
      <label className='texto-form'>Cadastrar Empresa</label>
      <input
        type="text"
        placeholder="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        className="input-field"
      />
      <label className='texto-form'>Mês e Ano</label>
      <input
        type="text"
        placeholder="MM/AAAA"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="input-field"
      />
      <label className='texto-form'>Origem do Lead</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="input-field">
        <option value="">Selecione o tipo</option>
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
        <input type="checkbox" checked={venda} onChange={(e) => setVenda(e.target.checked)} className="checkbox" />
      </label>
      <label className="label">
        Reunião:
        <input type="checkbox" checked={reuniao} onChange={(e) => setReuniao(e.target.checked)} className="checkbox" />
      </label>
      <div className="button-container">
        <button type="submit" className="submit-button">Cadastrar</button>
        <button type="button" onClick={handleClear} className="submit-button">Limpar</button>
        <button type="button" onClick={handleDelete} className="submit-button">Excluir</button>
      </div>
    </form>
  );
}

export default Formulario;
