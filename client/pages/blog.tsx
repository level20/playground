import { Card, List } from "antd";
import { createClient } from "next-sanity";
import Blogs from "../components/blogs";
import { BlogPost } from "../models/blog-post";

interface BlogProps {
  posts: BlogPost[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      <h1>this is a blog</h1>
      <Blogs posts={posts}></Blogs>
    </>
  );
};

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);
  console.log(posts);
  console.log(posts[0].body);
  console.log(posts[0].body.children);
  console.log(posts[0].categories);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
