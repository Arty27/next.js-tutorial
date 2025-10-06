async function productDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Product Details {slug}</h1>
    </div>
  );
}
export default productDetails;
