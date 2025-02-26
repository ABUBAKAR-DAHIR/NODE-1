import React from 'react'

function Hero() {
  return (
    <section className='h-screen flex items-center justify-center overflow-hidden  '
    style={{
      backgroundImage: `url("./background.avif")`,
      backgroundSize: "cover"
    }}>
        <div className='text-white text-center'>
            <h1 className='text-5xl font-bold mb4'>Welcome to our store</h1>
            <p className='text-xl mb-8'>
                Discover the best products at unbeatable prices
            </p>
            <a 
            href="/shop"
            className='text-white bg-blue-300 py-3 px-6 rounded-lg hover:bg-blue-600'
            >Shop Now</a>
        </div>
    </section>
  )
}

export default Hero