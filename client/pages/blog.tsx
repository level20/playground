import Blogs from "../components/blogs";
import DefaultLayout from "../components/layout/default-layout";
import { BlogPost } from "../models/blog-post";
import { getBlogPosts } from "../services/blog.service";

interface BlogProps {
  posts: BlogPost[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <DefaultLayout>
      <h1>this is a blog</h1>
      <Blogs posts={posts}></Blogs>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
