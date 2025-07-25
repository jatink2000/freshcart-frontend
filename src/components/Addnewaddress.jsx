import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Addnewaddress() {

   let [address,setaddress]= useState({})
   let inputvalue=(e)=>{
    setaddress({
        ...address,[e.target.name]:e.target.value
    })
   }



    let addressbtn = () => {
    axios.post("https://freshcartbackend-lilac.vercel.app/addaddress", {address})
    .then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "add address submit !",
          icon: "success"
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }



    return (
        <div class="bg-gray-100 p-6">
            <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-xl font-semibold">New Shipping Address</h2>
                        <p class="text-sm text-gray-500">Add new shipping address for your order delivery.</p>
                    </div>
                    
                </div>

                <div class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="First name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onChange={inputvalue} name='firstname'/>
                        <input type="text" placeholder="Last name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onChange={inputvalue} name='lastname' />
                    </div>

                    <input type="text" placeholder="Address Line 1" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onChange={inputvalue} name='address1' />
                    <input type="text" placeholder="Address Line 2" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onChange={inputvalue} name='address1' />
                    <input type="text" placeholder="City" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onChange={inputvalue} name='city' />
                    <input type="number" placeholder="Mobile number" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onChange={inputvalue} name='mobilenumber' />

                    <div class="flex justify-end gap-4 pt-4">
                        <button class="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition" onClick={addressbtn}>
                            Save Address
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addnewaddress
