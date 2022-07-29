import React, { Component } from 'react'

import logo from "../data/logo.png"

import './header.css'

export default class header extends Component {
  render() {
    return (
      <header>
        <img className='header-logo' src={logo} alt="Genshin Impact Quizz"></img>
      </header>
    )
  }
}
