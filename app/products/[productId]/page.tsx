export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div className="flex flex-col items-center justify-center font-sans p-8 bg-yellow-50">
      <h1 className="py-8 px-16 bg-blue-100">Product Detail - {productId}</h1>
    </div>
  );
}
