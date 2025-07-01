import React from "react";
import productimg13 from "../assets/productimg13.jpg"
import { FaTrashAlt } from "react-icons/fa"
import productimg17 from "../assets/productimg17.jpg"
import productimg18 from "../assets/productimg18.jpg"
import productimg19 from "../assets/productimg19.jpg"


 const wishlistItems = [
  {
    id: 1,
    image: productimg18,
   name: "Fresh Banana",
    quantity: "2Pc",
   price: "$5.00",
   status: "In Stock",
 },
 {
   id: 2,
   image: productimg19,
   name: "Beetroot",
   quantity: "1kg",
   price: "$18.00",
   status: "In Stock",
 },
 {
   id: 3,
   image: productimg13,
   name: "Golden Pineapple",
   quantity: "2No",
   price: "$18.00",
   status: "Out of Stock",
 },
 {
   id: 4,
   image: productimg17,
   name: "Fresh Kiwi",
   quantity: "1kg",
   price: "$35.00",
   status: "In Stock",
 }]


function Wishlist(){
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
      <p className="text-gray-600 mb-6">There are 4 products in this wishlist.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4"><input type="checkbox" /></th>
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.quantity}</div>
                  </div>
                </td>
                <td className="p-4 text-gray-700">{item.price}</td>
                <td className="p-4">
                  {item.status === "In Stock" ? (
                    <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">In Stock</span>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-xs font-medium">Out of Stock</span>
                  )}
                </td>
                <td className="p-4">
                  {item.status === "In Stock" ? (
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700">
                      Add to cart
                    </button>
                  ) : (
                    <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800">
                      Contact us
                    </button>
                  )}
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

