"use client";

import useSWR from "swr";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SWRExample = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "https://dummyjson.com/products",
    fetcher,
    {
      revalidateOnFocus: true,
      refreshInterval: 30000,
      errorRetryCount: 3,
    }
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <h1>Error Occured: {error.message}</h1>;
  }
  const handleRefresh = () => {
    mutate();
  };
  return (
    <div>
      <h1>SWR Example</h1>
      <button onClick={() => handleRefresh()}>Refresh</button>
      {data.products.map((item: Product) => (
        <div key={item.id} className="mt-2 border p-2 flex flex-col">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>{item.category.toLocaleUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default SWRExample;
