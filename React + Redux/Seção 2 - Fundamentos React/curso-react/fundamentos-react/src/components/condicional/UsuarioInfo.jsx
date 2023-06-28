/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If, { Else } from "./If";

export default props => {
  const usuario = props.usuario || {}

  return (
    <div>
{/*       <If test={ usuario && usuario.nome }>
        Seja bem vindo <strong>{ usuario.nome }</strong>!
      </If>
       
      <If test={ !usuario || !usuario.nome }>
        <br></br>Seja bem vindo <strong>Amigão</strong>!
      </If> */}

      <If test={ usuario && usuario.nome }>
        Seja bem vindo <strong>{ usuario.nome }</strong>!<br></br>
        <Else>
          Seja bem vindo <strong>meu Nobre</strong>!
        </Else>
      </If>
    </div>
  );
}