import { List } from "antd";
import { BlogPost } from "../../models/blog-post";
import BlogSummary from "./blog-summary";

interface BlogProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogProps) => {
  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
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

export default BlogList;
