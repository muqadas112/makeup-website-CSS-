import { Gelasio } from 'next/font/google'
import React from 'react'
import { MdHeight } from 'react-icons/md'

const Product = () => {

    const ProductData =[
    {id: 1, name: "Shower Gel", price: 1200, Description: "For Smooth Skin", image:'/Showergel.jpeg' },
    {id: 2, name: "Nivea Shower Gel", price: 1500, Description: "Hydrated skin", image:'/ShowerGel2.jpeg' },
    {id: 3, name: "Bold Nail Paint", price: 450, Description: "bold Nail", image:'/NailPaint2.jpeg' },
    {id: 4, name: "Nude Nail Paint", price: 1200, Description: "look elegant", image:'/NailPaint.jpeg' },
    {id: 5, name: "Lip Gloss", price: 1000, Description: " Hydrate your lips", image:'/LipGloss.jpeg' },
    {id: 6, name: " Maybelline Lip Gloss", price: 800, Description: "bold Lips", image:'/LipGloss2.jpeg' },
    ]
  return (
    <div>
      <div className='products'>
        {ProductData.map((product) =>(
          <div key={product.id} className='product card'>
            <img  src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.Description}</p>
            <div className='product-price'>{product.price}</div>
            <button>Add to Cart</button>
          </div>


        ))}
      </div>
      
    </div>
  )
}

export default Product
