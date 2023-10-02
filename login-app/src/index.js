import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './views/App';
import Login from './views/Login';
import LoginForm from './views/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <LoginForm />
  </React.StrictMode>
);

/*
import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, {data} from '../data/DataContext';
import Store from '../data/Store';

const App = props => {
    const [state, setState] = useState(data);

    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App
*/