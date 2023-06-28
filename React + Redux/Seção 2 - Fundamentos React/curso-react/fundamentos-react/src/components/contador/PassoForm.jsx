import React from "react";

export default (props) => {
  return(
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        type="number"
        id="passoInput"
        value={props.passo}
        //O + na instrução abaixo, converte para um valor numérico:
        onChange={e => props.setPasso(+e.target.value)}
      />
    </div>
  )
}