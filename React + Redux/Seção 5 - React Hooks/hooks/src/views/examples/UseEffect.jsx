/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

//Exercício 01
function calcFatorial(num) {
    const n = parseInt(num, 10);

    if (n < 0) return -1;
    if (n === 0) return 1;

    return calcFatorial(n - 1) * n;
}

//Exercício 02
function checaStatus(num) {
    let status = '';
    if (num != 0)
        status = (num % 2 === 0 ? 'Par' : 'Ímpar');
    //console.log(num);
    return status;
}

const UseEffect = (props) => {
    //Exercício 01
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    //Exercício 02
    const [numero, setNumero] = useState(0);
    const [status, setStatus] = useState('');

    //A instrução abaixo gera um loop infinito, por causa da renderização.
    //Para evitar isso, pode-se usar a hook useEffect(). 
    //setFatorial(calcFatorial(number));

    //Exercício 01
    useEffect(function() {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect(function() {
        if (fatorial > 1000000) {
            document.title = "Eita!";
        }
    });

    //Exercício 02
    useEffect(function() {
        setStatus(checaStatus(numero));
    }, [numero]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            
            <SectionTitle title="Exercício 01" />
            <div className='center'>
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>

                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício 02" />
            <div className='center'>
                <span className='text'>Status:</span>
                {/*<span className="text red">{numero % 2 === 0 ? 'Par' : 'Ímpar'}</span> */}
                <span className="text red">{status}</span>

                <input type="number" className="input"
                    value={numero}
                    onChange={e => setNumero(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect;
