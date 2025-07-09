import React from 'react'


import DashBoardSidebar from "./DashBoardSidebar";
import DashboardHeader from "./DashboardHeader";
import { Link, useLocation } from 'react-router-dom';

function Editproduct() {


   let loc= useLocation()
   let a= loc.state
   console.log(a)


    let inputvaluebtn=()=>{

    }




    let editproductbtn=()=>{

    }

    return (
        <>

            <div className="flex min-h-screen bg-gray-50">
                <DashBoardSidebar />
                <main className="flex-1 p-4">
                    <DashboardHeader />

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Edit Product
                            </h1>
                            <p className="text-sm text-gray-500">
                                Dashboard /{" "}
                                <span className="text-green-600 font-semibold">Products</span> /
                                Edit Product
                            </p>
                        </div>
                        <Link to="/DashBoard">
                            <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300">
                                ← Back to Products
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* LEFT SECTION */}
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Product Information</h2>

                            {/* Title & Product Category */}
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                                        onChange={inputvaluebtn}
                                        name="producttitle"
                                        value={a.producttitle}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Category
                                    </label>
                                    <select className="border border-gray-300 rounded-lg px-4 py-2 w-full" name="productcategory" onChange={inputvaluebtn} value={a.productcategory}>
                                        <option>Select Product Category</option>
                                        <option value={"Fruits & Vegetables"}>Fruits & Vegetables</option>
                                        <option value={"Dairy"}>Dairy</option>
                                        <option value={"Snacks"}>Snacks</option>
                                    </select>
                                </div>
                            </div>

                            {/* Weight & Units */}
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" >
                                        Weight
                                    </label>
                                    <input
                                        name="productweight"
                                        type="text"
                                        placeholder="Weight"
                                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                                        onChange={inputvaluebtn}
                                        value={a.productweight}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        quantity:
                                    </label>
                                    <select className="border border-green-400 rounded-lg px-4 py-2 w-full" name="productquantity" onChange={inputvaluebtn}>
                                        <option>Select Units</option>
                                        <option value={"1"}>1</option>
                                    </select>
                                </div>
                            </div>

                            {/* Product Images */}
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">Product Images</h2>
                                <div className="border-gray-300 rounded-lg text-center text-gray-400">
                                    <input
                                        type="text"
                                        placeholder="Product Images url"
                                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                                        onChange={inputvaluebtn}
                                        name="productimage"
                                        value={a.productimage}
                                    />
                                </div>
                            </div>

                            {/* Product Descriptions */}
                            <div>
                                <h2 className="text-lg font-semibold mb-2">
                                    Product Descriptions
                                </h2>
                                {/* Toolbar */}
                                {/* Textarea */}
                                <textarea
                                    className="w-full h-28 border border-gray-300 rounded-b-md p-2 resize-none focus:outline-none"
                                    placeholder="" onChange={inputvaluebtn} name="productdescriptions"
                                    value={a.productdescriptions}
                                ></textarea>
                            </div>

                            {/* ✅ Create Product Button */}
                            <div className="mt-6">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium" onClick={editproductbtn}>
                                    Edit Product
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="w-full lg:w-1/3 space-y-6">
                            {/* In Stock & Status */}


                            {/* Product Price */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h2 className="text-lg font-semibold mb-4">Product Price</h2>
                                <div className="mb-3">
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                                        Regular Price
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="$0.00"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        onChange={inputvaluebtn}
                                        value={a.regularprice}
                                        name="regularprice"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                                        Sale Price
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="$0.00"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        onChange={inputvaluebtn}
                                        value={a.saleprice}
                                        name="saleprice"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default Editproduct
