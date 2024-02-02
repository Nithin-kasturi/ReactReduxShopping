import React from 'react'
import Product from './Product'

export default function Items({data}) {
    return (
    <div className='flex flex-wrap'>
        {
            data.map((item,index)=>{
                return(
            <Product 
                key={index}
                id={item.id}
                item={item}
                price={item.price}
                />
                )
            })
        }
    </div>
  )
}
