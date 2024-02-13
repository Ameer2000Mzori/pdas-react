import React from 'react'
import Card from './Card'
const Cards = () => {
  const arryObj = [
    {
      img: 'https://images.unsplash.com/photo-15043494',
      title: 'Ameer',
    },
    {
      img: 'https://images.unsplash.com/photo-1503494',
      title: 'Ahmed',
    },
    {
      img: 'https://images.unsplash.com/photo-15042494',
      title: 'Ali',
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
