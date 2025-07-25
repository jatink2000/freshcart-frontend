import React, { useEffect, useState } from "react";
import productimg13 from "../assets/productimg13.jpg"
import { FaTrashAlt } from "react-icons/fa"
import productimg17 from "../assets/productimg17.jpg"
import productimg18 from "../assets/productimg18.jpg"
import productimg19 from "../assets/productimg19.jpg"
import axios from "axios";

function Wishlist() {


  let [wishlist, setwishlist] = useState([])

  useEffect(() => {
    wishlistitem()
  }), []


  let wishlistitem = () => {
    axios.get("https://freshcartbackend-lilac.vercel.app/wishlistsproduct").then((res) => {
      if (res.data.status) {
        setwishlist(res.data.wishlistsproduct)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="p-8">
      <div className="text-sm breadcrumbs text-green-600">
        <ul className="flex gap-2">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li className="text-gray-600">Shop Wishlist</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mt-4">My Wishlist</h1>
      <p className="text-gray-600 mb-6">There are {wishlist.length} products in this wishlist.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4"><input type="checkbox" /></th>
              <th className="p-4">Product</th>
              <th className="p-4">Product Category</th>

              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4 flex items-center gap-4">
                  <img src={item.productimage} alt={item.producttitle} className="w-12 h-12 object-contain" />
                  <div>
                    <div className="font-semibold">{item.producttitle}</div>
                    <div className="text-sm text-gray-500">{item.productweight}</div>
                  </div>
                </td>
                <td className="p-4 text-gray-700">{item.productcategory}</td>
                <td className="p-4 text-gray-700">{item.saleprice}</td>
                <td className="p-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">In Stock</span>
                </td>
                <td className="p-4 text-gray-700">
                  <button className="bg-green-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-green-700">
                    Add to cart
                  </button>
                </td>
                <td className="p-4 text-center">
                  <button className="text-gray-500 hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;

