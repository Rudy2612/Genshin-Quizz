import React, { Component } from 'react'

import './header.css'

export default class header extends Component {
  render() {
    return (
      <header>
        <p className='header-title'>Quizz Genshin</p>
        <p className='header-etape'>{this.props.etape}/{this.props.total}</p>
      </header>
    )
  }
}
