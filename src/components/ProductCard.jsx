import React, { useState } from 'react'
import ProductDetail from '../components/ProductDetails'
import axios from 'axios';
import { useEffect } from 'react'




function ProductCard() {

  let [Products, setProducts] = useState([])

  useEffect(() => {
    apidata()
  }, [])


  let apidata = () => {
    axios.get("http://localhost:8080/products").then((res) => {
      if (res.data.status) {
        setProducts(res.data.ourproducts)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <div className='px-4'>
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">

        {Products.map((item) => (
          <div key={item.id} className="border rounded-lg p-3 shadow hover:shadow-lg transition relative">

            {/* Tag and Discount */}
            {(item.tag || item.discount) && (
              <div className="absolute top-2 left-2 flex flex-col space-y-1">
                {item.tag && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">{item.tag}</span>
                )}
                {item.discount && (
                  <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">{item.discount}</span>
                )}
              </div>
            )}

            {/* Image */}
            <img
              src={item.productimage}
              alt={item.producttitle}
              className="w-full object-contain mx-auto"
            />

            {/* Category */}
            <p className="text-sm text-gray-500 mt-2">{item.productcategory}</p>

            {/* Title */}
            <h2 className="text-base font-semibold text-gray-800">{item.producttitle}</h2>

            {/* Ratings */}
            {/* <div className="flex items-center text-yellow-500 text-sm mt-1">
            ⭐ {item.rating} <span className="text-gray-500 ml-1">({item.reviews})</span>
          </div> */}

            {/* Price */}
            <div className="mt-1">
              <span className="font-semibold text-gray-900">${item.saleprice}</span>
              {item.originalPrice > item.price && (
                <span className="text-gray-400 line-through ml-2 text-sm">${item.originalPrice}</span>
              )}
            </div>

            {/* Add Button */}
            <button className="mt-3 w-half bg-green-600 text-white text-sm py-1 rounded hover:bg-green-700 transition">
              + Add
            </button>
          </div>
        ))}
      </div>

    </>

  )
}

export default ProductCard