async function getProducts() {
  const isError = Math.random() > 0.5;
  if (isError) {
    throw new Error("Failed to fetch Products");
  }
  return [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
  ];
}

export default async function ErrorExample() {
  const products = await getProducts();
  return (
    <div className="p-4">
      <h1>Products List</h1>
      <div className="grid gap-4">
        {products.map((item, i) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}
