import React from 'react'
import Cart from './Cart'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-center pb-3 gap-8'>
        <h1 className='font-bold text-2xl'>ShoppingAPI</h1>
        <Cart/>
    </div>
  )
}
