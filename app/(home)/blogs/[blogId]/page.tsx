export default async function BlogPost({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return <p>Post: {blogId}</p>;
}
