/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
    const listaProdutos = produtos.map((produto) => {
        return(
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td style={{textAlign: "right"}}>{produto.preco.toFixed(2)}</td>
            </tr>
        );
    });

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th align="right">Preço (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    );
};