import React, { useState } from 'react'
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashBoardNavbar from "../components/DashBoardNavbar"
import DashboardHeader from '../components/DashboardHeader';
import productimg1 from '../assets/productimg1.jpg'
import productimg2 from '../assets/productimg2.jpg'
import productimg3 from '../assets/productimg3.jpg'
import axios from 'axios';
import { useEffect } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


import { Menu } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';


function DashBoardProduct() {



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



  // open actionbtn---------------

  let openactionbtn = () => {
    document.getElementById("actionbtn").style.display = "block"
  }


  // deleteproduct ----------------
  let deleteproduct = (product) => {

    Swal.fire({
      title: "Are You Sure ?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {

      if (result.isConfirmed) {
        axios.post("http://localhost:8080/deleteproduct", product).then((res) => {
          if (res.data.status) {
            Swal.fire({
              title: "Delete product.",
              icon: "success"
            })

            setTimeout(function groot() {
              window.location.reload()
            }, 3000)

          }
        }).catch((err) => {
          console.log(err)
        })
      }
    });



  }




  // editproduct ------------------

  let go = useNavigate()
  let edititem = (product) => {
    go("/Editproduct", { state: product })
  }

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
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4">Price</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-4">
                    <img
                      src={product.productimage}
                      alt={product.producttitle}
                      className="w-10 h-10 object-contain"
                    />
                  </td>
                  <td className="p-4 text-gray-800">{product.producttitle}</td>
                  <td className="p-4 text-gray-600">{product.productcategory}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                      Active
                    </span>
                  </td>
                  <td className="p-4 text-gray-800">${product.saleprice}</td>

                  <td className="p-4">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="p-2 rounded-full hover:bg-gray-200">
                        <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                      </Menu.Button>

                      <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-10">
                        <div className="p-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active ? 'bg-gray-100' : ''
                                  } w-full text-left px-4 py-2 text-sm text-gray-700`}
                                onClick={() => edititem(product)}
                              >
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active ? 'bg-gray-100' : ''
                                  } w-full text-left px-4 py-2 text-sm text-red-600`}
                                onClick={() => deleteproduct(product)}
                              >
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Menu>
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