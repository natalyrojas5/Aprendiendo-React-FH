import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

// const saludo = <h1>Hola Mundo</h1>;
// ReactDOM.render(<PrimeraApp saludo ={'Hola Mundo'} subtitulo={'Soy un subtitulo'}/>, divRoot);

const divRoot = document.querySelector('#app');
ReactDOM.render(<CounterApp />, divRoot);
