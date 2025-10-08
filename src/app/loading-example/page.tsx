const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    stats: {
      users: 1000,
    },
  };
};

async function LoadingExample() {
  const data = await getData();
  return (
    <div className="p-4">
      <h1>Loading Example</h1>
      <p className="text-center">{data.stats.users}</p>
    </div>
  );
}
export default LoadingExample;
