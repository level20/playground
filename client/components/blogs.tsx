import { List } from "antd";
import { BlogPost } from "../models/blog-post";
import BlogSummary from "./blog-summary";

interface BlogProps {
  posts: BlogPost[];
}

const Blogs = ({ posts }: BlogProps) => {
  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <BlogSummary blog={post} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Blogs;
