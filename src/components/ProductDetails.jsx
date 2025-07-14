import { FaShoppingBag, FaSyncAlt, FaHeart } from "react-icons/fa";
import productimg1 from "../assets/productimg1.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Review from "./Review";
import ReviewList from "./Reviewlist";

function ProductDetail() {


  let loc = useLocation()

  let a = loc.state




  // wishlist ------------
  let wishlist = (a) => {
    axios.post("http://localhost:8080/wishlist", { a }).then((res) => {
      if (res.data.status) {
        Swal.fire({
          title: "Wishlist Success !",
          icon: "success"
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }


  return (


    <>

      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
            <img
              src={a.productimage}
              alt="Product"
              className="w-full max-w-sm object-contain rounded-xl"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
      

            {/* Category */}
            <p className="text-green-600 font-semibold">{a.productcategory}</p>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900">
              {a.producttitle}
            </h1>

            {/* Ratings */}
            <div className="text-green-600 text-sm">
              ⭐⭐⭐⭐⭐ <span className="text-gray-600">(4 reviews)</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-gray-900">
              ₹{a.saleprice}{" "}
              <span className="line-through text-gray-400 ml-2 font-normal text-lg">
                ₹{a.regularprice}
              </span>{" "}
              <span className="text-red-500 text-base font-medium ml-2">
                10% Off
              </span>
            </div>

            {/* Weight Options */}
            <div className="flex gap-2 flex-wrap">
              <button
                className="border px-4 py-2 rounded-md hover:bg-gray-100 text-sm"
              >
                {a.productweight}
              </button>
            </div>

            {/* Quantity Control */}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-green-700">
                <FaShoppingBag />
                Add to cart
              </button>

              {/* <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Buy Now
            </button> */}

              {/* <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-gray-200">
              <FaSyncAlt />
            </button> */}

              <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-gray-200" onClick={() => wishlist(a)}>
                <FaHeart />
              </button>
            </div>

            {/* Meta Info */}
            <div className="text-sm text-gray-600 space-y-1 pt-2">
              <p>
                <span className="font-semibold text-gray-800">
                  Product Code:
                </span>{" "}
                FBB00255
              </p>
              <p>
                <span className="font-semibold text-gray-800">Availability:</span>{" "}
                <span className="text-green-600 font-medium">In Stock</span>
              </p>
            </div>
          </div>
        </div>
      </div>






      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-start">

          {/* Review list */}
          <div className="w-full md:w-1/2">
            <ReviewList />
          </div>

          {/* Review form */}
          <div className="w-full md:w-1/2 space-y-6">
            <Review />
          </div>

        </div>
      </div>







      <Footer />

    </>

  );
};

export default ProductDetail;
