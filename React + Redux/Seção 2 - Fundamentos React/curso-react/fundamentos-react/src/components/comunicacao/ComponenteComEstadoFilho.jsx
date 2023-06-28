/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
  const callback = props.quandoClicar;
  const min = 50;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * (max - min));
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Componente com Estado (Filho)</div>
      <button onClick={e => callback('João', gerarIdade(), gerarNerd())}>Forncecer Informações</button>
    </div>
  );
}