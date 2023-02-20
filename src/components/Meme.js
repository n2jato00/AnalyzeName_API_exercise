import React from 'react'


export default function Detail(props) {
  return (
    <div className='meme'>
      <h3>{props.title}</h3>
      <img src={props.image} />
      <a href="#" onClick={props.close}>Back to memes</a>
    </div>
  )
}
