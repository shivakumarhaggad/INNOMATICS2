import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "./CartContext";
interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export function CartItem({ id, name, price, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  return (
    <div className="flex items-center space-x-4 py-2">
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(id, quantity - 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={() => removeItem(id)}
          className="p-1 hover:bg-gray-100 rounded text-red-600"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
