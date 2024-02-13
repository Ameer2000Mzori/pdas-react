import React from 'react'

const Card = (props) => {
  return (
    <div className="w-[200px] h-[350px] bg-zinc-700 flex flex-col text-center items-center justify-evenly rounded-md text-white">
      <h1>{props.title}</h1>
      <img
        className="h-[100px] w-[100px] object-cover rounded-full"
        src={props.img}
        alt=""
      />
      <h4>{props.describe}</h4>
    </div>
  )
}

export default Card
