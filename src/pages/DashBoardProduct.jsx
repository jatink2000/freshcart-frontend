import React from 'react'
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashBoardNavbar from "../components/DashBoardNavbar"
import DashboardHeader from '../components/DashboardHeader';


const products = [

  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    image: "/images/sev-bhujia.png",
    category: "Snack & Munchies",
    status: "Active",
    price: 24,
    date: "24 Nov 2022",
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    image: "/images/nutrichoice.png",
    category: "Bakery & Biscuits",
    status: "Active",
    price: 24,
    date: "20 Nov 2022",
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    image: "/images/5star.png",
    category: "Bakery & Biscuits",
    status: "Active",
    price: 35,
    date: "14 Nov 2022",
  },

];

function DashBoardProduct() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />
      <main className="flex-1 p-4">
        <DashboardHeader />
        <DashBoardNavbar />


        <div className="overflow-x-auto mt-6 rounded-xl shadow-sm">
          <table className="min-w-full bg-white border rounded-xl text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4">Price</th>
                <th className="p-4">Create at</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>
                  <td className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-contain"
                    />
                  </td>
                  <td className="p-4 text-gray-800">{product.name}</td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4">
                    {product.status === "Active" ? (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded font-medium">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-gray-800">{product.price}</td>
                  <td className="p-4 text-gray-600">{product.date}</td>
                  <td className="p-4">
                    <button className="text-gray-400 hover:text-black text-xl">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </main>
    </div>
  )
}

export default DashBoardProduct