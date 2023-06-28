/*
  Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API,
  your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
*/
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";

/*
  ReactDOM.render(
    <tag>
      ...intruções
    </tag>
  )

  O exemplo acima diz que as instruções devem estar envolvidas entre tags, caso contrário
  ocorrerá o erro abaixo:

  ERROR
    [eslint] 
      src\index.js
      Line 15:4:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
      Did you want a JSX fragment <>...</>? (15:4)
*/

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

/*
ReactDOM.render(
  <App />
  , document.getElementById('root')
);
*/

// Ou...
/*
import ReactDOM from "react-dom";
import './index.css';

ReactDOM.render(
  <div>
    <h1>Olá React!</h1>
  </div>
  , document.getElementById('root')
);
*/

// Ou...
/*
import ReactDOM from "react-dom";
import './index.css';

const tag = <strong>Olá Mundo!</strong>;

ReactDOM.render(
  <div>
    { tag }
  </div>
  , document.getElementById('root')
);
*/

// Ou...
/*
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);

//Para usar HTML + JavaScript dentro da string, usa-se jsx.
//root.render('<div>Olá React!</div>')
*/