import React from "react";
import { X } from "lucide-react";
import { useCart } from "./CartContext";
import { CartItem } from "./CartItem";
interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}
export function Cart({ isOpen, onClose }: CartProps) {
  const { items, totalPrice, clearCart } = useCart();
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 bg-[#232f3e] text-white">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#131921] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Your Amazon Cart is empty
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Your shopping cart lives to serve. Give it purpose — fill it
                  with groceries, clothing, household supplies, electronics, and
                  more.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4 bg-gray-50">
              <div className="flex justify-between text-lg">
                <span>Subtotal ({items.length} items):</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-2 px-4 rounded-lg border border-[#FCD200] shadow-sm font-medium">
                Proceed to checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-white hover:bg-gray-100 text-black py-2 px-4 rounded-lg border border-gray-300 shadow-sm font-medium"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
