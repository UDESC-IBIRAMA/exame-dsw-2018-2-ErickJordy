import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var carros = ["carro-0"];
for(var i = 1; i < 20; i++) {
    carros.push('carro-'+i);
}

class App extends Component {
    
  render() {
    return (
      <div className="App">
          <p>
            {
            carros.map(function (carro) {
              return <li>{carro}</li>
            })
          }
          </p>      
      </div>
    );
  }
}

export default App;
