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
  const response = await fetch("https://dummyjson.com/products");
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
