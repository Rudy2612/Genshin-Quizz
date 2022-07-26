import React, { Component } from 'react'
import characters from "../data/characters.json"
import "./character.css"

function Card(props) {
    return (
        <div className='character-item'>
            <img className='character-image' alt={props.name} src={props.image}></img>
            <p className='character-name'>{props.name}</p>
        </div>
    )
}

export default class character extends Component {
    render() {
        return (
            <div className='caracter-bloc'>

                {Object.keys(characters).map((e) => {
                    return <Card name={characters[e].name} image={characters[e].image} />
                })}
                
            </div>
        )
    }
}
