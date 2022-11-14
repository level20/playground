import DefaultLayout from "../../components/layout/default-layout";
import BlogPost from "../../components/blog/blog-post";
import { ContentType } from "../../enums/content-type.enum";
import { BlogPost as BlogPostType } from "../../models/blog-post";
import { getBlogPost } from "../../services/blog.service";
import { getSlugPaths } from "../../services/query.service";

interface BlogProps {
  blog: BlogPostType;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <DefaultLayout hideHeader>
      <BlogPost blog={blog} />
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const paths = await getSlugPaths(ContentType.blog);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const blog = await getBlogPost(slug);

  return {
    props: {
      blog,
    },
  };
}

export default Blog;
