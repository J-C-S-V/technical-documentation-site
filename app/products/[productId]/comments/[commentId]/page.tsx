export default async function CommentDetail({
  params,
}: {
  params: Promise<{ productId: string; commentId: string }>;
}) {
  const { productId, commentId } = await params;
  return (
    <div className="flex flex-col items-center justify-center font-sans p-8 bg-yellow-50">
      <h1 className="py-8 px-16 bg-blue-100">
        Comment {commentId} of product {productId}
      </h1>
    </div>
  );
}
