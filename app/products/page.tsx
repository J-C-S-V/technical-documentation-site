async function getDashboardData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { stats: [1, 2, 3] };
}

export default async function Products() {
  const data = await getDashboardData();

  return (
    <div>
      <h1>Products</h1>
      <p>Your data: {JSON.stringify(data)}</p>
    </div>
  );
}
