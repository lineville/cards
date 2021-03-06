import React from 'react'
import CardList from './CardList'
import { cards } from './constants/cards'

const App = () => {
  return (
    <div className="App">
      <CardList cards={cards} />
    </div>
  )
}

export default App
