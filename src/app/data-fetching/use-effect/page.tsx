"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

const UseEffectExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  const fetchListOfProducts = async () => {
    try {
      setIsLoading(false);
      const data = await fetch("https://dummyjson.com/products");
      if (!data.ok) {
        throw new Error("Failed to get Products!");
      }
      const result = await data.json();
      setData(result.products);
    } catch (e) {
      console.log("Error while fetching products", e);
    } finally {
      setIsLoading(true);
    }
  };
  return (
    <div>
      <h1>UseEffectExample</h1>
      {isLoading ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseEffectExample;
