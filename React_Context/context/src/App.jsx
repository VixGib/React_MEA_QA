import React from 'react'
import CartList from './components/CartList'
import ItemsList from './components/ItemList'
import { CartProvider } from './context/cart-context'
import './styles.css'

export default function App() {
  return (
    <main>
      <h1>React Fruit Market</h1>
      <CartProvider>
        <CartList />
        <ItemsList />
      </CartProvider>
    </main>
  )
}


