/* eslint-disable import/no-anonymous-default-export */
import "./TabelaProdutos2.css";
import React from "react";
import produtos from "../../data/produtos";

export default () => {
    function getLinhas(){
        return produtos.map((produto, index) => {
            console.log(index % 2 == 0 ? 'par' : 'impar');

            return (
                <tr key={produto.id} className={index % 2 == 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    );
};
