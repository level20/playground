import { Col, Divider, Row, Typography } from "antd";
const { Title } = Typography;
import Blogs from "../components/blogs";
import DefaultLayout from "../components/layout/default-layout";
import { BlogPost } from "../models/blog-post";
import { getBlogPosts } from "../services/blog.service";

interface BlogProps {
  posts: BlogPost[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <DefaultLayout hideHeader="false">
      <Row style={{ marginLeft: "16px", marginRight: "16px" }}>
        <Row>
          <Col>
            <Title style={{ marginBottom: "0" }}>Blogs</Title>
          </Col>
        </Row>
        <Divider />
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Blogs posts={posts}></Blogs>
          </Col>
        </Row>
      </Row>
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
