import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App(){
  const cards = data.map((x) => 
      <Card
        key = {x.id}
        imageUrl = {x.imageUrl}
        title = {x.title}
        location = {x.location}
        startDate = {x.startDate}
        endDate = {x.endDate}
        description = {x.description}
        googleMapUrl = {x.googleMapsUrl}
      />
  )
  return(
    <div>
      <Navbar/>
      {cards}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
