import React from 'react'

const ProductCard = ({ product}) => {
  return (
    <div className=" text-black rounded-lg   flex-wrap bg-blue-100  shadow-lg h-max flex flex-col justify-center items-center pt-8 pb-8">
      <img src={product.img} alt="product" className="w-[250px] h-[200px] rounded-xl" />
      <h2 className="text-xl font-bold capitalize ">{product.name}</h2>
      <p className="text-lg">Price: ${product.price}</p>
      {/* <p className="text-lg">Desc: {product.desc}</p> */}
      <div className='flex justify-around w-[350px] m-4'>
        <button className='px-5 py-5 bg-orange-600 rounded-lg text-white hover:bg-amber-950 '>Add to cart</button>
        <button className='px-5 py-5 bg-purple-700 rounded-lg text-white hover:bg-blue-950'>Buy</button>
      </div>
    </div>
    // <div className='bg-red-800'>
    //   <h1>{product.name}</h1>
    // </div>
  )
}

export default ProductCard