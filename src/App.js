import React, { Component } from 'react';
import Card from './Card';
import './App.css';

const pokemon = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electrique",
    pv: 10,
  },
  {
    id: 2,
    name: "Bulbazar",
    type: "Normal",
    pv: 0,
  },
  {
    id: 3,
    name: "Boubou",
    type: "Eau",
    pv: 3,
  },
  {
    id: 4,
    name: "Poupou",
    type: "Feu",
    pv: -5,
  },
  {
    id: 5,
    name: "Kaka",
    type: "Terre",
    pv: 330,
  },
  {
    id: 6,
    name: "Agnès",
    type: "Beauté",
    pv: 1000,
  },
  {
    id: 7,
    name: "Mathias",
    type: "Baba cool",
    pv: -2,
  },
  {
    id: 8,
    name: "Juju",
    type: "Géolocalisé",
    pv: 11,
  },
  {
    id: 9,
    name: "Clément",
    type: "Affamé",
    pv: 0,
  }
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poke: pokemon
    }
  }

  eliminate(element){
    const kill = this.state.poke.filter(arg => arg.id !== element);
    this.setState({poke: kill});
  }

  render() {
    return (
      <div className="App">
        <div className="alive">
          <h3>Pokemon vivants</h3>
          {this.state.poke.filter(arg => arg.pv > 0).map((element) => (
            <Card
              key={element.id}
              id={element.id}
              name={element.name}
              type={element.type}
              pv={element.pv}
              kill = {() => this.eliminate(element.id)}
            />
          ))
          }
        </div>
        <div className="dead">
          <h3>Pokemon morts</h3>
          {this.state.poke.filter(arg => arg.pv <= 0).map((element) => (
            <Card
              key={element.id}
              id={element.id}
              name={element.name}
              type={element.type}
              pv={element.pv}
              kill = {() => this.eliminate(element.id)}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
