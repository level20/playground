import { createClient } from "next-sanity";

interface Post {
  _id: string;
  _type: string;
  title: string;
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <h1>this is a blog</h1>
      {posts.length > 0 && (
        <ul>
          {posts.map((post: Post) => (
            <li key={post._id}>{post?.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
