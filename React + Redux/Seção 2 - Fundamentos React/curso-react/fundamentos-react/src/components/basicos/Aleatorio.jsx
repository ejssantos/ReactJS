import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  //const min = props.min;
  //const max = props.max;

  //Ou...
  const { min, max } = props;

  //A instrução acima é equivalente as expressões abaixo:
  //const [ a, b ] = [ 1, 2 ];
  //const {c, d, x } = { c: 12, d: 45, x: 'teste'};

  const aleatorio = parseInt(Math.random() * (max - min) + min);

  return (
    <div>
      <h2>Valor Alestório</h2>
      <p>
        <strong>Valor Mínimo: </strong>
        { min }
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        { max }
      </p>
      <p>
        <strong>Valor Escolhido: </strong>
        { aleatorio }
      </p>
    </div>
  );
};