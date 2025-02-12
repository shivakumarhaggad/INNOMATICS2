import React, { useState } from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useCart } from "./CartContext";
interface NavbarProps {
  onCartClick: () => void;
}
export function Navbar({ onCartClick }: NavbarProps) {
  const { totalItems, totalPrice } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="bg-[#131921] text-white">
      <div className="container mx-auto">
        <div className="flex items-center h-16 px-4">
          <div className="flex items-center mr-4">
            <h1 className="text-2xl font-bold">shop</h1>
          </div>
          <div className="hidden md:flex items-start mr-4 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-300 text-xs">Deliver to</span>
              <span className="font-bold">Select location</span>
            </div>
          </div>
          <div className="flex-1 max-w-3xl mx-4">
            <div className="flex">
              <div className="relative flex-1">
                <select className="h-10 px-3 bg-gray-100 border-r border-gray-300 rounded-l-md text-black text-sm">
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Computers</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products"
                  className="w-full h-10 px-4 text-black"
                />
              </div>
              <button className="h-10 px-6 bg-[#febd69] hover:bg-[#f3a847] text-black rounded-r-md">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:block">
              <div className="text-sm">
                <div className="text-gray-300">Hello, Sign in</div>
                <div className="font-bold">Account & Lists</div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-sm">
                <div className="text-gray-300">Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
            </div>
            <button
              onClick={onCartClick}
              className="relative flex items-center hover:text-[#f3a847]"
            >
              <div className="relative">
                <ShoppingCart className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 bg-[#f3a847] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <span className="hidden md:block ml-1 font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#232f3e] py-2 px-4">
        <div className="container mx-auto flex items-center space-x-6 text-sm">
          <button className="flex items-center hover:text-[#f3a847]">
            <Menu className="w-5 h-5 mr-1" />
            All
          </button>
          <a href="#" className="hover:text-[#f3a847]">
            Today's Deals
          </a>
          <a href="#" className="hover:text-[#f3a847]">
            Customer Service
          </a>
          <a href="#" className="hover:text-[#f3a847]">
            Registry
          </a>
          <a href="#" className="hover:text-[#f3a847]">
            Gift Cards
          </a>
          <a href="#" className="hover:text-[#f3a847]">
            Sell
          </a>
        </div>
      </div>
    </div>
  );
}
