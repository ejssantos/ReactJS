import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

//Exercício 01
const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

//Exercício 02
const initialState2 = {
    number: 0
}

//Exercício 01
function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2};
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state;
    }
}

//Exercício 02
function reducer2(state2, action2) {
    switch (action2.type) {
        case "multiplicarPor7":
            return {...state2, number: state2.number * 7};
        case "dividirPor25":
            return {...state2, number: state2.number / 25};
        case "converterParaInteiro":
            return {...state2, number: parseInt(state2.number)};
        case "adicionarNumero":
            return {...state2, number: state2.number + action2.numeroN}
        default:
            return state2;
    }
}

const UseReducer = (props) => {
    //Exercício 01
    const [state, dispatch] = useReducer(reducer, initialState);

    //Exercício 02
    const [state2, dispatch2] = useReducer(reducer2, initialState2);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: "login", payload: "Eduardo"})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: "numberAdd2"})}>+2</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">


                <span className="text">{state2.number}</span>
                <div>
                    <button className="btn">x7</button>
                    <button className="btn">/25</button>
                    <button className="btn">Int</button>
                    <button className="btn">add(n)</button>
                </div>
            </div>
        </div>
    );
}

export default UseReducer
