import React, { Component } from 'react'
import "./modal.css"

export default class modalFinish extends Component {
  render() {
    return (
      <>
        <div className='modal-bg'></div>
        <div className='modal-body'>

          <h3 className='modal-title'>Vous avez terminé le quizz !</h3>

          <p className='modal-time'>{new Date(Date.now() - this.props.timestamp).getMinutes()}:{String(new Date(Date.now() - this.props.timestamp).getSeconds()).length === 1 ? "0" + new Date(Date.now() - this.props.timestamp).getSeconds() : new Date(Date.now() - this.props.timestamp).getSeconds()}</p>

          <div className='modal-btn-twitter'>
            <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=J%27ai%20trouv%C3%A9%20tous%20les%20personnages%20de%20Genshin%20Impact%20en%20${new Date(Date.now() - this.props.timestamp).getMinutes()} minutes%20!`}>Partager sur Twitter</a>
          </div>
        </div>
      </>
    )
  }
}
