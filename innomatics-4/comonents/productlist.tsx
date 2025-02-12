import React from "react";
import { Product } from "./Product";
const products = [
  {
    id: 1,
    name: "Smartphone Pro",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Laptop Ultra",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];
export function ProductList() {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
