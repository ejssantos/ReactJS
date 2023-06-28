/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

  let nome = '?';
  let idade = 10;
  let nerd = true;

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    //console.log(nome, idade, nerd);
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;

    console.log(nomeParam, idadeParam, nerdParam);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span><strong>{idade} </strong></span>
        <span><strong>{nerd ? 'Verdadeiro' : 'Falso'}</strong></span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
}