import React, { useContext, useEffect } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';
import SectionTitle from '../../components/layout/SectionTitle';

const UseContext = (props) => {

    //Exercício #01

    //A instrução é válida. Caso a utilize, retira-se a palavra context das demais linhas.
    //const {state, setState} = useContext(DataContext);

    //Ou...
    const context = useContext(DataContext);

    /*  A instrução "...context.state" replica todos os valores dos atributos do objeto,
        uma vez que ao usar o useContext, ao alterar um atributo, deve-se setar todos os
        atributos do objeto, e especificar em seguida os atributos que serão alterados.
    */
    function addNumber(value) {
        context.setState({
            ...context.state,
            number: context.state.number + value
        })
    }

    //Exercício #02
    const {number, text, setNumber, setText} = useContext(AppContext);

    useEffect(function() {
        if (number > 1250) {
            setText("Eita!!!");
        }
    }, [number]);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />


            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            
                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
            
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
