import React from 'react'

const Card = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.img} alt="" />
      <h4>{props.describe}</h4>
    </>
  )
}

export default Card
