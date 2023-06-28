import React from "react"

// Observação: as props são somente leitura.

export default function ComParametro(props) {
  console.log(props)
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
    <div>
      <p>
        <strong>{ props.nome } </strong>
        tem nota  
        <strong>{ ' '+ props.nota +' ' }</strong>
        e está
        <strong>{ ' '+ status }</strong>
      </p>
    </div>
  )
}