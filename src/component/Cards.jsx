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
      describe: 'alexa is from amazon',
    },
    {
      img: cortana,
      title: 'cortana',
      describe: 'cortana is from the world',
    },
    {
      img: siri,
      title: 'siri',
      describe: 'siri is from apple',
    },
  ]

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-row text-center items-center justify-evenly">
        {arryObj.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            img={item.img}
            describe={item.describe}
          />
        ))}
      </div>
    </>
  )
}

export default Cards
