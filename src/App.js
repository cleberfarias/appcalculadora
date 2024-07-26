import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Relatorios from './componentes/Relatorios/Relatorios';
import InformacoesAdicionais from './componentes/InformacoesAdicionais/InformacoesAdicionais';
import './App.css';

function App() {
  const [relatorios, setRelatorios] = useState([]);
  const [inputSalario, setInputSalario] = useState('');

  useEffect(() => {
    const savedRelatorios = localStorage.getItem('relatorios');
    if (savedRelatorios) {
      setRelatorios(JSON.parse(savedRelatorios));
    }
  }, []);

  const handleFormSubmit = ({ empresa, data, tipo, venda, reuniao, inputSalario }) => {
    const novoRelatorio = {
      empresa: empresa,
      data: data,
      tipo: tipo,
      venda: venda ? 'Sim' : '',
      reuniao: reuniao ? 'Sim' : '',
      pontos: calcularPontos(tipo, venda, reuniao),
    };
    const novosRelatorios = [...relatorios, novoRelatorio];
    setRelatorios(novosRelatorios);
    setInputSalario(parseFloat(inputSalario));
    localStorage.setItem('relatorios', JSON.stringify(novosRelatorios));
  };

  const handleDelete = (index) => {
    const novosRelatorios = [...relatorios];
    novosRelatorios.splice(index, 1);
    setRelatorios(novosRelatorios);
    localStorage.setItem('relatorios', JSON.stringify(novosRelatorios));
  };

  function calcularPontos(tipo, venda, reuniao) {
    let pontos = 0;
    if (venda) {
      switch (tipo) {
        case 'GOOGLE ADS':
        case 'TELEFONE':
        case 'INDICAÇÕES':
          pontos = 5;
          break;
        case 'EVENTO':
        case 'BASE':
          pontos = 20;
          break;
        case 'OUTBOUND':
          pontos = 17;
          break;
        default:
          pontos = 0;
      }
    }
    if (reuniao) {
      switch (tipo) {
        case 'GOOGLE ADS':
        case 'TELEFONE':
        case 'INDICAÇÕES':
          pontos += 0.5;
          break;
        case 'EVENTO':
        case 'BASE':
          pontos += 1;
          break;
        case 'OUTBOUND':
          pontos += 1.75;
          break;
        default:
          pontos += 0;
      }
    }
    return pontos;
  }

  return (
    <div className="App">
      <Formulario onFormSubmit={handleFormSubmit} />
      <Relatorios relatorios={relatorios} onDelete={handleDelete} />
      <InformacoesAdicionais relatorios={relatorios} inputSalario={inputSalario} className="left-align" />
    </div>
  );
}

export default App;
