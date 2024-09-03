import React from 'react';
import ListManager from './ListManager';
import SimpleFormValidator from './SimpleFormValidator';
import InputControlado from './InputControlado'; 

function App() {
    return (
        <div className="App">
            <h1>Gerenciador de Lista</h1>
            <ListManager />
            <h2>Validador de Formulário Simples</h2>
            <SimpleFormValidator />
            <h2>Input Controlado</h2>
            <InputControlado />
        </div>
    );
}

export default App;
