import React from "react";
import { Star, Truck } from "lucide-react";
import { useCart } from "./CartContext";
interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}
export function Product({ id, name, price, image }: ProductProps) {
  const { addItem } = useCart();
  const rating = 4.5; // This would normally come from your data
  const reviews = 2456; // This would normally come from your data
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 relative flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-[#0F1111] hover:text-[#C7511F] cursor-pointer">
          {name}
        </h3>
        {/* Ratings */}
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${star <= rating ? "fill-[#FFA41C] text-[#FFA41C]" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-[#007185] hover:text-[#C7511F] cursor-pointer">
            {reviews.toLocaleString()}
          </span>
        </div>
        {/* Price */}
        <div className="mt-2">
          <span className="text-sm">$</span>
          <span className="text-2xl font-medium">{Math.floor(price)}</span>
          <span className="text-sm">{(price % 1).toFixed(2).substring(1)}</span>
        </div>
        {/* Prime Badge */}
        <div className="flex items-center mt-2 text-sm">
          <Truck className="w-4 h-4 mr-1 text-[#007185]" />
          <span className="text-[#007185]">Prime FREE Delivery</span>
        </div>
        {/* Add to Cart Button */}
        <button
          onClick={() =>
            addItem({
              id,
              name,
              price,
            })
          }
          className="mt-4 w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-2 px-4 rounded-lg border border-[#FCD200] shadow-sm text-sm font-medium"
        >
          Add to Cart
        </button>
        {/* Buy Now Button */}
        <button className="mt-2 w-full bg-[#FFA41C] hover:bg-[#FA8900] text-black py-2 px-4 rounded-lg border border-[#FF8F00] shadow-sm text-sm font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
}
