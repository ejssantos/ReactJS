import React from "react";

// O Fragment é utilizado quando desejamos utilizar mais de uma tag adjacente sem o uso de uma div.

export default function Fragmento(props) {
  return (
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>

    /*
    Ou pela Forma Reduzida:

    <>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </>
    */

    /*
    Ou com uso de Fragmento com propriedade:

    <React.Fragment key='1'>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>
    */
  )
}