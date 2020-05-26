import React, { Component } from 'react'
import Groceryitems from './components/GroceryItems'
import GroceryCart from './components/GroceryCart'

export default class App extends Component {
  

  render() {
    return (
      <div id="grocery-container">
        <Groceryitems />
        <GroceryCart />
      </div>
    )
  }
}
