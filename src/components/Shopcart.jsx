import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ShopCart = () => {
    const [cartItems, setCartItems] = useState([]);



    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.saleprice * item.productquantity,
        0
    );


    useEffect(() => {
        cartdata()
    }, [])


    let cartdata = () => {
        axios.get("https://freshcartbackend-lilac.vercel.app/allcartitem").then((res) => {
            if (res.data.status) {
                setCartItems(res.data.ourcartitem)
            }
        }).catch((err) => {
            console.log(err)
        })
    }



    // checkout page url ---------------
   let go= useNavigate()
    let checkout=()=>{
        go("/CheckOutPage",{state:cartItems})
    }








    let CARTITEM = ({ data }) => {
        // removecartitem ------------------

        let removecartitem = (item) => {
            axios.post("https://freshcartbackend-lilac.vercel.app/removecartitem", item).then((res) => {
                if (res.data.status) {
                    alert("remove item")

                    window.location.reload()
                }



            }).catch((err) => {
                console.log(err)
            })
        }




        // updatequantity ----------------
        let [quantity, setquantity] = useState(data.productquantity)

        let increasequantity = () => {
            setquantity(++quantity)

            axios.post("https://freshcartbackend-lilac.vercel.app/updatequantity", { quantity, data })

            window.location.reload()

        }



        let decresequantity = () => {
            setquantity(--quantity)

            axios.post("https://freshcartbackend-lilac.vercel.app/updatequantity", { quantity, data })
            window.location.reload()

        }



        // ProductDetail --------------------------

        let go = useNavigate()

        let productdetails = (item) => {
            go("/ProductDetail", { state: item })
        }





        return (
            <>
                <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                        <img onClick={() => productdetails(data)}
                            src={data.productimage}
                            alt={data.producttitle}
                            className="w-14 h-14 object-contain"
                        />
                        <div>
                            <h4 className="font-semibold">{data.producttitle}</h4>
                            <p className="text-sm text-gray-500">{data.productweight || "250g"}</p>
                            <button
                                className="flex items-center text-red-600 text-sm mt-1 hover:underline"
                                onClick={() => removecartitem(data)}
                            >
                                <FaTrashAlt className="mr-1 text-sm" /> Remove
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex border rounded overflow-hidden">
                            <button
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                onClick={decresequantity}
                            >
                                -
                            </button>
                            <span className="px-3 py-1">{quantity}</span>
                            <button
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                                onClick={increasequantity}
                            >
                                +
                            </button>
                        </div>
                        <div className="font-bold text-gray-800">
                            ₹{(data.saleprice * data.productquantity)}
                        </div>
                    </div>
                </div>
            </>
        )
    }






    





    return (

        <>
            <Navbar />

            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-1">🛒 Your Cart</h2>
                <p className="text-sm text-gray-500 mb-4">Location: 382480</p>

                {cartItems.length === 0 ? (
                    <div className="text-gray-600 text-center mt-12">
                        <p className="text-lg">Your cart is currently empty.</p>
                        <p className="text-sm mt-1">Start adding products to see them here.</p>
                    </div>
                ) : (
                    <>
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm font-medium">
                            🎉 You’ve got FREE delivery. Start <span className="font-bold">checkout now!</span>
                        </div>

                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <>
                                    <CARTITEM data={item} />
                                </>
                            ))}
                        </div>

                        {/* Total Summary */}
                        <div className="mt-6 border-t pt-4 flex justify-between items-center text-lg font-semibold text-gray-800">
                            <span>Total</span>
                            <span>₹{totalAmount}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={() => window.location.href = "/home"}
                                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={() =>checkout() }
                                className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-800"
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>


            <Footer />

        </>

    );
};

export default ShopCart;
