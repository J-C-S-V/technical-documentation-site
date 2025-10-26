const ProductDetail = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <>
      <div className="">{productId}</div>
    </>
  );
};

export default ProductDetail;
