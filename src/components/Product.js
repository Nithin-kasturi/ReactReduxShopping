    import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseAmount, increaseAmount } from '../features/BasketSlice';

    export default function Product({key,id,item,price}) {
        const productCounter=useSelector((store)=>store.basket.productCounter[id] || 0);
        const dispatch=useDispatch();
    return (
        <div>
            <div className='flex flex-col border-2 border-black p-2 m-2 rounded-xl'>
                <div className='h-10 w-22 mb-10'>
                    <img src={item.image} className='h-[75px] w-[75px]' />
                </div>
                <div className='text-center pb-1'>
                    <h1>$ {item.price}</h1>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <button className='bg-blue-500 w-5 rounded-lg text-white' onClick={()=>{dispatch(increaseAmount({id:id,price:price}))}}>+</button>
                    <p>{productCounter}</p>
                    <button className='bg-blue-500 w-5 rounded-lg text-white' onClick={()=>{dispatch(decreaseAmount({id:id,price:price}))}}>-</button>
                    
                </div>
            </div>
        </div>
    )
    }
