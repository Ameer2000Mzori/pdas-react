import React from 'react'

const Card = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.img} alt="" />
    </>
  )
}

export default Card
