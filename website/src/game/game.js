import React, { Component } from 'react'
import characters from "../data/characters.json"

import Header from "../header/header"
import Chartacter from "../character/character"
import ModalFinish from '../modal/modalFinish'

import "./game.css"

var _ = require('lodash');


export default class game extends Component {

    state = {
        input: '',
        total: 0,
        charactersMelange: [],
        finish: false,
    }


    componentDidMount() {
        // Initialisation et mélange du fichier aléatoirement
        var charactersFile = characters;
        var charactersMelange = _.shuffle(charactersFile)
        this.setState({
            charactersMelange: charactersMelange,
            total: charactersMelange.length,
            etape: 0,
            display: charactersMelange[0]
        })
    }



    handleChange = e => {
        // -> Set value to input
        this.setState({ input: e.target.value });


        // -> Initialisation du timestamps du début
        if (!this.state.timestamp) {
            this.setState({ timestamp: Date.now() })
        }


        // -> Si ça correspond au personnage actuel
        if (e.target.value.toLowerCase() === this.state.display.name.toLowerCase()) {
            // On augmente de 1 l'étape
            var etape = this.state.etape
            etape++

            // si c'était le dernier personnage => terminé
            if (etape === this.state.total) {
                this.setState({
                    etape: etape,
                    input: "",
                    finish: true
                })
            }
            else
                this.setState({
                    etape: etape,
                    display: this.state.charactersMelange[etape],
                    input: ""
                })
        }
    }



    render() {
        return (
            <>

                <Header etape={this.state.etape} total={this.state.total} />

                <Chartacter display={this.state.display} />

                {this.state.finish === true && <ModalFinish timestamp={this.state.timestamp} />}

                <div className='bottom-bloc'>
                    <input className='input-character' value={this.state.input} onChange={this.handleChange} autoFocus={true} ></input>
                </div>
            </>
        )
    }
}
