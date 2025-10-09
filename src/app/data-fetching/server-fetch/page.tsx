// default fetch() -> caches response automatically
// cache -> reload, force-cache, no-store

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

const getProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  //   no-store -> the response is never cached, will always get fresh data from source
  //   force-cache -> looks in cache store first, if not availalble will get data from source,
  //   if available will return from cache
  //    reload -> will get fresh data from source and will update the cache store

  if (!response.ok) {
    throw new Error("Failed to get Products");
  }
  return response.json();
};

async function ServerSideFetchExample() {
  const products: ProductsResponse = await getProducts();
  return (
    <div>
      <h1>Server Side Data</h1>
      {products.products.map((item) => (
        <div key={item.id} className="mt-2 border p-2 flex flex-col">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>{item.category.toLocaleUpperCase()}</p>
        </div>
      ))}
    </div>
  );
}
export default ServerSideFetchExample;
