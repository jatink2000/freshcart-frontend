import React from 'react'
import productimg1 from '../assets/productimg1.jpg'
import productimg2 from '../assets/productimg2.jpg'
import productimg3 from '../assets/productimg3.jpg'
import productimg4 from '../assets/productimg4.jpg'   
import productimg5 from '../assets/productimg5.jpg' 
import productimg6 from '../assets/productimg6.jpg'
import ProductDetail from '../components/ProductDetails'

const Products = [
  {
    id: 1,
    title: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    price: 21.6,
    originalPrice: 24,
    discount: "10%",
    tag: "Sale",
    rating: 4.3,
    reviews: 4,
    image: productimg1
  },
  {
    id: 2,
    title: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    price: 24,
    originalPrice: 24,
    discount: null,
    tag: null,
    rating: 4.3,
    reviews: 4,
    image: productimg2
  },
  {
    id: 3,
    title: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits",
    price: 35,
    originalPrice: 35,
    discount: "$4.00 Off",
    tag: "Buy 1 Get",
    rating: 4.3,
    reviews: 4,
    image: productimg3
  },
  {
    id: 4,
    title: "Onion Flavour Potato",
    category: "Snack & Munchies",
    price: 3,
    originalPrice: 5,
    discount: "40%",
    tag: "Hot",
    rating: 4.3,
    reviews: 4,
    image: productimg4
  },
  {
    id: 5,
    title: "Salted Instant Popcorn",
    category: "Instant Food",
    price: 11.7,
    originalPrice: 18,
    discount: "35%",
    tag: null,
    rating: 4.3,
    reviews: 4,
    image: productimg5
  }
];


function ProductCard(){
  return (
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
            src={item.image}
            alt={item.title}
            className="w-full h-32 object-contain mx-auto"
          />

          {/* Category */}
          <p className="text-sm text-gray-500 mt-2">{item.category}</p>

          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800">{item.title}</h2>

          {/* Ratings */}
          <div className="flex items-center text-yellow-500 text-sm mt-1">
            ⭐ {item.rating} <span className="text-gray-500 ml-1">({item.reviews})</span>
          </div>

          {/* Price */}
          <div className="mt-1">
            <span className="font-semibold text-gray-900">${item.price}</span>
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
  )
}

export default ProductCard