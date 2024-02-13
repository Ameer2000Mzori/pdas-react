import React from 'react'
import Card from './Card'
import alexa from '../assets/alexa.png'
import cortana from '../assets/cortana.png'
import siri from '../assets/siri.png'

const Cards = () => {
  const arryObj = [
    {
      img: alexa,
      title: 'alexa',
    },
    {
      img: cortana,
      title: 'cortana',
    },
    {
      img: siri,
      title: 'siri',
    },
  ]

  return (
    <>
      {arryObj.map((item, index) => (
        <Card key={index} title={item.title} img={item.img} />
      ))}
    </>
  )
}

export default Cards
