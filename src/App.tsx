import React from 'react'
import CardList from './CardList'
import { cards } from './constants/cards'

function App() {
  return (
    <div className="App">
      <CardList cards={cards} />
    </div>
  )
}

export default App
