import React, { cloneElement } from "react";
//import FamiliaMembro from "./FamiliaMembro";

//  Exemplo 2 de uso de componente pai/filho
//  Essa forma é mais elaborada que a forma 1.
export default (props) => {
  //console.log(typeof props.children.map);

  return (
    <div>
      {/* {React.cloneElement(props.children)} */}

      {/* Ou... */}

      {/* {cloneElement(props.children, props)} */}

      {/* Ou... */}

      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })} */}

      {/* Ou... */}

      {
        props.children.map((child, indice) => {
          return cloneElement(child, {...props, key: indice})
        })
      }

    </div>
  );
};

//  Exemplo 1 de uso de componente pai/filho
{
  /*Outra forma de implementar através do operador Spread --> {...props} */
}
/* export default props => {
  return(
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>
      <FamiliaMembro nome="Ana" {...props}></FamiliaMembro>
      <FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>
    </div>
  )
} */
