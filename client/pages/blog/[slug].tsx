import { Col, Divider, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
import DefaultLayout from "../../components/layout/default-layout";
import { ContentType } from "../../enums/content-type.enum";
import { BlogPost } from "../../models/blog-post";
import { getBlogPost } from "../../services/blog.service";
import { getSlugPaths } from "../../services/query.service";

interface BlogProps {
  blog: BlogPost;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <DefaultLayout hideHeader>
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
