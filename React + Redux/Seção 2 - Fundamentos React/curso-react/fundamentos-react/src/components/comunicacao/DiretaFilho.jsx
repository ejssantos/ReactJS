/* eslint-disable import/no-anonymous-default-export */
import React from "react";

/*  Na comunicação direta, será mostrada como o componente pai comunica o componente filho. */

export default (props) => {
  return (
    <div>
      <span>{props.nome} </span>
      <span><strong>{props.idade} </strong></span>
      <span>{props.nerd ? "Verdadeiro" : "False"}</span>
    </div>
  );
};