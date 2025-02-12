import React, { useEffect, useState, createContext, useContext } from "react";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedItems = localStorage.getItem("cart");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.id === item.id);
      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i,
        );
      }
      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };
  const removeItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const updateQuantity = (id: number, quantity: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, quantity),
            }
          : item,
      ),
    );
  };
  const clearCart = () => {
    setItems([]);
  };
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
