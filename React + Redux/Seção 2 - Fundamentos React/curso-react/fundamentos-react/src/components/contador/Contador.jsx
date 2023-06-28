import "./Contador.css";
import React, { Component } from "react";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  };
  
  //Ou com uso de constructor...
  

  /*
  constructor(props) {
    super(props);
    this.state = {
      numero: props.numeroInicial
    };
  };
  */

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    });
  };

/*   setPasso = (e) => {
    this.setState({
      passo: +e.target.value
    });
  } */

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    });
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />

        {/*<p>{ this.state.numero }</p>*/}
        
        {/* <button onClick={this.inc()}>+</button> */}

        
        {/* Modelo 01:
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            type="number"
            id="passoInput"
            value={this.state.passo}
            onChange={this.setPasso} />
        </div>

         <button onClick={_ => this.inc()}>+</button>
        <button onClick={_ => this.dec()}>-</button>
        */}

        {/*Modelo 02: */}
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

export default Contador;