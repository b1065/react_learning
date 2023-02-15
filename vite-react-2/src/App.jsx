import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from "./cardData"

export default function App() {
  const cards = cardData.map(x => 
      <Card
        key={x.id} 
        item={x}
        //{...item}
      />
    )
  return (
      <div>
        <Navbar />
        <Hero />
        <section className='cardList'>
          {cards}
        </section>
      </div>
  )
}
