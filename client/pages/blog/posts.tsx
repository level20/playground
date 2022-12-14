import { Col, Divider, Row, Typography } from "antd";
const { Title } = Typography;
import BlogList from "../../components/blog/blog-list";
import DefaultLayout from "../../components/layout/default-layout";
import { BlogPost } from "../../models/blog-post";
import { getBlogPosts } from "../../services/blog.service";

interface BlogProps {
  posts: BlogPost[];
}

const Posts = ({ posts }: BlogProps) => {
  return (
    <DefaultLayout headerTitle="Blog">
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          <BlogList posts={posts}></BlogList>
        </Col>
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

export default Posts;
