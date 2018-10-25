import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "",
            talk: ""
        }
        this.state.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.props.name === "Mathias"){
            this.setState({
                color: "red",
                talk: `je suis ${this.props.name} et j'ai 14 jours de moins que Robert`
            })
        }
        else if(this.props.pv <= 0){
            this.setState({
                color: "red",
                talk: `je suis ${this.props.name} et je suis mort`
            })
        }
        else if(this.props.pv > 0 && this.props.name === "Agnès"){
            this.setState({
                color: "green",
                talk: `je suis ${this.props.name} et je suis sympa`
            })
        }
        else{
            this.setState({
                color: "green", 
                talk: `je suis ${this.props.name} et je suis vivant`
            })
        }
    }

    render() {
        const {name, type, pv} = this.props; 
        return (
            <div className={`pokecard ${this.state.color}`} >
                <p>Nom: {name}</p>
                <p>Type: {type}</p>
                <p>Points de vie: {pv}</p>
                <p>{this.state.talk}</p>
                <button onClick={this.state.handleClick}>Parler</button>
                <button onClick={this.props.kill}>Eliminer</button>
            </div>
        )
    }
}

export default Card;