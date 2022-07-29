import React from 'react'
import "./character.css"


export default function character(props) {
    if (props.display)
        return (
            <div className='character-body' style={{ backgroundImage: `url(${props.display.background})` }}>
                <div className='character-image' style={{ backgroundImage: `url(${props.display.image})` }}></div>
            </div>
        )
}