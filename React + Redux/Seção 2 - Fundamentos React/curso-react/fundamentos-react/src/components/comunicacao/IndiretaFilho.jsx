/* eslint-disable import/no-anonymous-default-export */
import React from "react";

  /*  Na comunicação indireta, será mostrada como o componente filho comunica o componente pai. */

export default props => {
  const callback = props.quandoClicar;

  return (
    <div>
      <div>Filho</div>
      <button onClick={e => callback('João', 53, true)}>Forncecer Informações</button>
    </div>
  );
}