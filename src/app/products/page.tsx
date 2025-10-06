import Link from "next/link";

const Products = () => {
  const products = [
    { id: 1, product: "Computer", price: 23999 },
    { id: 2, product: "Watch", price: 2999 },
    { id: 3, product: "Mobile", price: 9999 },
  ];
  return (
    <div>
      <h1>Products</h1>
      <div className="grid">
        {products.map((prod, i) => (
          <div key={i} className="border p-4 rounded">
            <h2>{prod.product}</h2>
            <h3>${prod.price}</h3>
            <Link href={`/products/${prod.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
