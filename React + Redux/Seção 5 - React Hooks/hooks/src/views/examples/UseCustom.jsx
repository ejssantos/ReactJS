import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';

const UseRef = (props) => {

    //Caso não queira informar um valor, poderá declarar conforme instrução abaixo:
    //const[count, , dec] = useCounter();
    const[count, inc, dec] = useCounter(10);

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => dec()}>-1</button>
                    <button className="btn" onClick={() => inc()}>+1</button>
                </div>
            </div>

            {/*fecth('http://files.cod3r.com.br/curso-react/estados.json').then(resp => resp.json()).then(json => console.log(json));*/}
        </div>
    )
}

export default UseRef
