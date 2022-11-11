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
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
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
