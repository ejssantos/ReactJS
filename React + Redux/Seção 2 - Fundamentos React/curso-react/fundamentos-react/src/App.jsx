/* eslint-disable import/no-anonymous-default-export */
import './App.css';
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

import ListaAlunos from './components/repeticao/ListaAlunos.jsx';
import TabelaProdutos from './components/repeticao/TabelaProdutos.jsx';
import TabelaProdutos2 from './components/repeticao/TabelaProdutos2';

import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import ComponenteComEstadoPai from './components/comunicacao/ComponenteComEstadoPai';

import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';

import Mega from './components/mega/Mega';

/*
  Observação:
    Caso deseje criar uma função anônima, conforme exemplo abaixo:

      export default function () {...}

      é necessário manter a palavra chave default, caso contrário a função deverá ser
      nomeada, conforme exemplo abaixo:

        export default function App() {}

    Caso a função possua somente um parâmetro ela pode ser escrita de duas formas, ou seja:

      Sem os ():
      
        export default props => {}

      Ou com _:

        export default _ => {}

    Ao invés de:

      export default (props) => {}
    
*/

//  Com o uso de arrow function
//    export default (props) => {}
//  Ou...
//    export default function App() {}

export default (_) => {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>

      <div className="Cards">

         <Card titulo="#16 - Mega" color="#C4FCEA">
          <Mega qtd={6}></Mega>
        </Card>

        <Card titulo="#15 - Contador" color="#7BCBEA">
          <Contador numeroInicial={5}></Contador>
        </Card>

        <Card titulo="#14 - Componente Controlado (Input)" color="#FF7F50">
          <Input></Input>
        </Card>

        <Card titulo="#13 - Componente com Estado" color="#DFFF00">
          <ComponenteComEstadoPai></ComponenteComEstadoPai>
        </Card>

        <Card titulo="#12 - Comunicação Indireta" color="RosyBrown">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo= "#11 - Comunicação Direta" color="Plum ">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#10 - Condicional" color="Wheat">
          <ParOuImpar numero={20}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: 'Brasil' }} />
          <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
          <UsuarioInfo usuario={{ email: 'fe@nando.com' }}></UsuarioInfo>
          <UsuarioInfo usuario={{ nome: '' }}></UsuarioInfo>
        </Card>

        <Card titulo="#09 - Repetição - Resposta" color="#7fffd4">
          <TabelaProdutos2></TabelaProdutos2>
        </Card>

        {/*Repetição - Exercício*/}
        <Card titulo="#08 - Repetição - Ativos B3" color="#ffe135">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        {/*Exemplo de repetição */}
        <Card titulo="#07 - Repetição" color="#CCCCFF">
          <ListaAlunos></ListaAlunos>
        </Card>

        {/* Exemplo de componente com filhos */}
        <Card titulo="#06 - Componente com Filhos" color="#00ffff">
          <Familia sobrenome="Santos">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Ana"></FamiliaMembro>
            <FamiliaMembro nome="Gustavo" sobrenome="Ferreira"></FamiliaMembro>
          </Familia>
        </Card>

        {/* Exemplo de Card */}
        <Card titulo="#05 - Desafio Aleatório" color="#080">
          <Aleatorio min={1} max={10} />
        </Card>

        <Card titulo="#04 - Desafio Aleatório (Minha solução)" color="#F6900">
          <NumeroAleatorio min={1} max={10}></NumeroAleatorio>
        </Card>

        <Card titulo="#03 - Fragmento" color="#00ff00">
          <Fragmento />
        </Card>
        
        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <h2>Situação do Aluno</h2>
          <ComParametro nome="Pedro" nota={6.5} />
          <ComParametro nome="Priscila" nota={9.5} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};

//Forma mais reduzida de uma função
//export default _ => <Primeiro></Primeiro>;
//Ou com formatação:
//export default (_) => <Primeiro></Primeiro>;