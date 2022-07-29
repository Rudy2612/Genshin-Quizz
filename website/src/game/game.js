import React, { Component } from 'react'
import characters from "../data/characters.json"

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
        // Init & shake array of object
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


        // Init timestamp at start writing
        if (!this.state.timestamp) {
            this.setState({ timestamp: Date.now() })
        }


        // if input value == name displayed
        if (e.target.value.toLowerCase() === this.state.display.name.toLowerCase()) {

            var etape = this.state.etape
            etape++

            // if is end for array
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

                <Chartacter display={this.state.display} />

                {this.state.finish === true && <ModalFinish timestamp={this.state.timestamp} />}

                <div className='game-bottom-bloc'>
                    <p className='game-bottom-total'>{this.state.etape}/{this.state.total}</p>
                    <input className='game-input' value={this.state.input} onChange={this.handleChange} autoFocus={true}></input>
                </div>
            </>
        )
    }
}
