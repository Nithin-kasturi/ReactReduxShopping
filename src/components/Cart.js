import React from 'react'
import { useSelector } from 'react-redux'
export default function Cart() {
    const totalItems=useSelector((store)=>store.basket.totalItems);
    const totalAmount=useSelector((store)=>store.basket.totalAmount);
  return (
    <div className='flex flex-row gap-8 pt-1'>
        <h1 className='text-xl font-bold flex flex-row gap-3'>Items in cart  <p className='text-green-500'>{totalItems}</p></h1>
        <h1 className='text-xl font-bold flex flex-row gap-3'>Total Amount  <p className='text-green-800'>{totalAmount.toFixed(2)}</p></h1>
    </div>
  )
}
