import React from 'react';
import './InformacoesAdicionais.css'; // Importando o arquivo de estilo

function InformacoesAdicionais({ relatorios, inputSalario }) {
  const totalPontos = relatorios.reduce((acc, curr) => acc + curr.pontos, 0);
  const totalComissao = calcularComissao(totalPontos);
  const totalBonus = calcularBonus(totalPontos);
  const totalSalarioComissaoEBonus = inputSalario + totalComissao + totalBonus;

  function calcularComissao(pontos) {
    let porcentagem = 0;
    if (pontos >= 9.5 && pontos <= 19.5) {
      porcentagem = 0.2;
    } else if (pontos >= 20 && pontos <= 38) {
      porcentagem = 0.5;
    } else if (pontos >= 38.5 && pontos <= 69) {
      porcentagem = 0.7;
    } else if (pontos >= 69.5) {
      porcentagem = 1;
    }
    return porcentagem * inputSalario;
  }

  function calcularBonus(pontos) {
    let bonus = 0;
    if (pontos >= 90) {
      bonus = 1500;
    } else if (pontos >= 80) {
      bonus = 1000;
    } else if (pontos >= 70) {
      bonus = 500;
    }
    return bonus;
  }

  const enviarEmail = () => {
    // Lógica para enviar por e-mail
    alert('Enviando por e-mail...');
  };

  const imprimirInformacoes = () => {
    // Lógica para imprimir
    window.print();
  };

  return (
    <div className="informacoes-container"> {/* Adicionando a classe CSS */}
      <p>Total de pontos:{totalPontos}</p>
      <p>Salário: R$ {inputSalario}</p>
      <p>Comissão: R$ {totalComissao}</p>
      <p>Bônus: R$ {totalBonus}</p>
      <p>Total de Salário, Comissão e Bônus: R$ {totalSalarioComissaoEBonus}</p>
      <button onClick={enviarEmail} className="submit-button">Enviar por E-mail</button>
      <button onClick={imprimirInformacoes} className="submit-button">Imprimir</button>
    </div>
  );
}

export default InformacoesAdicionais;
