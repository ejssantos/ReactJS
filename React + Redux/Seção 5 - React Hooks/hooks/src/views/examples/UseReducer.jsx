import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import { initialState, allReducers } from '../../store';
import { numberAdd2, numberMulti7, login } from '../../store/actions';
import { numberAddN, numberDiv25, numberInt } from '../../store/actions/number';

//Exercício 01
/*
const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
};
*/

//Exercício 02
const initialState2 = {
    number: 1,
    numTemp: 0
};

//Exercício 01
/*
function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2};
        case 'numberMulti7':
            return {...state, number: state.number * 7};
        case 'numberDiv25':
            return {...state, number: state.number / 25};
        case 'numberInt':
            return {...state, number: parseInt(state.number)};
        case 'numberAddN':
            return {...state, number: state.number + action.payload};
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state;
    }
}
*/

//Exercício 02
function reducer2(state2, action2) {
    switch (action2.type) {
        case 'multiplicarPor7':
            return {...state2, number: state2.number * 7};
        case 'dividirPor25':
            return {...state2, number: state2.number / 25};
        case 'converterParaInteiro':
            return {...state2, number: parseInt(state2.number)};
        case 'adicionarNumero':
            return {...state2, number: state2.number + parseInt(action2.numeroN)}
        default:
            return state2;
    }
}

const UseReducer = (props) => {
    //Exercício 01
    //const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(allReducers, initialState);

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
                    {/*<button className="btn" onClick={() => dispatch({type: "login", payload: "Eduardo"})}>Login</button>*/}
                    <button className="btn" onClick={() => login(dispatch, "Eduardo José")}>Login</button>
                    
                    {/*<button className="btn" onClick={() => dispatch({type: "numberAdd2"})}>+2</button>*/}
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    
                    <button className="btn" onClick={() => numberMulti7(dispatch)}>*7</button>
                    <button className="btn" onClick={() => numberDiv25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => numberInt(dispatch)}>Int</button>
                    <button className="btn" onClick={() => numberAddN(dispatch, -9)}>-9</button>
                    <button className="btn" onClick={() => numberAddN(dispatch, 11)}>+11</button>

{/*                 
                    <button className="btn" onClick={() => dispatch({type: "numberMulti7"})}>/*7</button>
                    <button className="btn" onClick={() => dispatch({type: "numberDiv25"})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: "numberInt"})}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: "numberAddN", payload: -9})}>-9</button>
                    <button className="btn" onClick={() => dispatch({type: "numberAddN", payload: 11})}>+11</button>
 */}                
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{state2.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch2({type: "multiplicarPor7"})}>x7</button>
                    <button className="btn" onClick={() => dispatch2({type: "dividirPor25"})}>/25</button>
                    <button className="btn" onClick={() => dispatch2({type: "converterParaInteiro"})}>Int</button>
                    <div>
                    <span className="text">Informe um número:</span>
                        <div>
                            <input id='txtNumero' type="number" className="input" onChange={e => initialState2.numTemp = e.target.value} />
                            <button className="btn" onClick={() => dispatch2({type: "adicionarNumero", numeroN:initialState2.numTemp})}>
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseReducer;
