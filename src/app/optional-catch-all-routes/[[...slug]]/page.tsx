// The difference between optional catch all routes and normal catch-all-routes
// is that slugs is mandatory in the latter i.e., /catch-all-route/1/2/3
// here 1/2/3 is mandatory and if not given will give 404 error.
// in case of optional it is needed to be given.

export default async function ProductFilter({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>Optional-Product Filter</h1>
    </div>
  );
}
