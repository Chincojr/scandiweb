import React, { useEffect, useState } from 'react'
import "./Product.css"

const Products = () => {

  const [dbProducts, setDbProducts] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/add-products')
    .then(async(response) => {
      let dbProducts = await response.json()
      setDbProducts(dbProducts)
      console.log(dbProducts);
    })
    .catch(err => {
      console.log(err);
    })

}, [])

  

  return (
    <div className="">
        <div className="grid gap-y-2 ">
            {
              dbProducts.map(product => {
                return (
                  <div key={product._id} className="border-[2px] grid  w-[250px] p-4 border-red-400 ">
                  <input type="checkbox" id="check" className="checkbox delete-checkbox" />
                  <label htmlFor="check" className="flex flex-col items-center justify-center">
                      <h6 className="">{product.sku}</h6>
                      <h4 className="">{product.name}</h4> 
                      <h6 className="">{product.price}</h6>
                      <h6 className="">{product.productType}: 
                        <span className="">{product.productValue}</span>
                      </h6>                   
                  </label>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Products