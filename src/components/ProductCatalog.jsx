import React from 'react'
import ProductCard from './ProductCard'

const ProductCatalog = () => {
    const products = [
      {
        id: 1,
        name: "product 1",
        price: 100,
        img: "/product1.jpg",
        description: "Product 1 description"
      },
      {
        id: 2,
        name: "product 2",
        price: 150,
        img: "/product2.jpg",
        description: "Product 2 description"
      },
      {
        id: 3,
        name: "unicorn",
        price: 1000,
        img: "/product3.jpeg",
        description: "Product 3 description"
      },
      {
        id: 4,
        name: "product 4",
        price: 360,
        img: "/product4.jpeg",
        description: "Product 4 description"
      },
      {
        id: 5,
        name: "product 5",
        price: 500,
        img: "/product10.jpg",
        description: "Product 5 description"
      },
      {
        id: 6,
        name: "product 6",
        price: 1000,
        img: "/product7.jpg",
        description: "Product 6 description"
      },
    ]
    
  return (
    <section className="grid grid-cols-3 gap-4 mt-10 overflow-x-hidden px-10">
    <div>
      <h2 className="text-2xl font-bold mb-8">Product Catalog</h2>
      <div className="flex justify-between flex-wrap w-screen  items-center" 
      style={{
        backgroundColor: "red"
      }}>
        <div className='w-10xl flex flex-wrap '>
          {products.map((pro) => (
            <div key={pro.id} className='p-10'>
              <ProductCard product={pro} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
    // <section>
    //   <div>
    //     {products.map((product, key)=> (
    //       <ProductCard product={product}/>
    //     ))}
    //   </div>
    // </section>

    // <section>
    //   <div>
    //     <h2>ProductCatalog</h2>
    //     {products.map((product, key)=>(
    //      <div>
    //       <ProductCard product={product}/>
    //       </div>
    //     )
    //     )}
    //   </div>
    // </section>
  )
}

export default ProductCatalog