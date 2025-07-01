import { FaShoppingBag, FaSyncAlt, FaHeart } from "react-icons/fa";
import productimg1 from "../assets/productimg1.jpg";

function ProductDetail(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
          <img
            src={productimg1}
            alt="Product"
            className="w-full max-w-sm object-contain rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500">
            <span className="text-green-600 font-medium">Home</span> /{" "}
            <span className="text-green-600 font-medium">Shop</span> /{" "}
            Haldiram's Sev Bhujia
          </div>

          {/* Category */}
          <p className="text-green-600 font-semibold">Snack & Munchies</p>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            Haldiram's Sev Bhujia
          </h1>

          {/* Ratings */}
          <div className="text-green-600 text-sm">
            ⭐⭐⭐⭐⭐ <span className="text-gray-600">(4 reviews)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-900">
            ₹21.6{" "}
            <span className="line-through text-gray-400 ml-2 font-normal text-lg">
              ₹24
            </span>{" "}
            <span className="text-red-500 text-base font-medium ml-2">
              10% Off
            </span>
          </div>

          {/* Weight Options */}
          <div className="flex gap-2 flex-wrap">
            {["250g", "500g", "1kg"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2 rounded-md hover:bg-gray-100 text-sm"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity Control */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-100 text-lg rounded-l">
              -
            </button>
            <span className="px-6 py-2 border-t border-b">1</span>
            <button className="px-4 py-2 bg-gray-100 text-lg rounded-r">
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-green-700">
              <FaShoppingBag />
              Add to cart
            </button>

            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Buy Now
            </button>

            <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-gray-200">
              <FaSyncAlt />
            </button>

            <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-gray-200">
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
  );
};

export default ProductDetail;
