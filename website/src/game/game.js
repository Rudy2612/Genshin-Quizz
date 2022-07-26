import React, { Component } from 'react'
import "./game.css"
import Chartacter from "./character"

export default class game extends Component {
    render() {
        return (
            <>
                <Chartacter />
                <div className='input-bloc'>
                    <input className='input-character'></input>
                </div>
            </>
        )
    }
}
