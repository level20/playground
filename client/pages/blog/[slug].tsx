import { Col, Divider, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
import DefaultLayout from "../../components/layout/default-layout";
import { BlogPost } from "../../models/blog-post";
import { getBlogPost, getSlugPaths } from "../../services/blog.service";

interface BlogProps {
  blog: BlogPost;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <DefaultLayout hideHeader>
      <Row style={{ marginLeft: "16px", marginRight: "16px" }}>
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Title>{blog?.title}</Title>
          </Col>
        </Row>
        <Divider style={{ marginBottom: "16px", marginTop: "16px" }} />
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Paragraph>{blog?.body}</Paragraph>
          </Col>
        </Row>
      </Row>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const paths = await getSlugPaths();

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
