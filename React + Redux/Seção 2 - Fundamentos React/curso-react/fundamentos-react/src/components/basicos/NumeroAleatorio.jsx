import React from "react";

export default function Random(props) {
  const min = Math.ceil(props.min);
  const max = Math.floor(props.max);
  const valor = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <h1>Número aleatório: { valor }</h1>
  );
};