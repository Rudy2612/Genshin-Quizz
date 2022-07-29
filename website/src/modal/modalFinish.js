import React, { Component } from 'react'
import "./modal.css"

export default class modalFinish extends Component {
  render() {
    return (
      <>
        <div className='modal-bg'></div>
        <div className='modal-body'>
          <h3 className='modal-title'>Quizz terminé !</h3>
          <p className='modal-time'>{new Date(Date.now() - this.props.timestamp).getMinutes()}:{String(new Date(Date.now() - this.props.timestamp).getSeconds()).length === 1 ? "0" + new Date(Date.now() - this.props.timestamp).getSeconds() : new Date(Date.now() - this.props.timestamp).getSeconds()}</p>
        </div>
      </>
    )
  }
}
