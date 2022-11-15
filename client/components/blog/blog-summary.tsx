import { Card, Col, Divider, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { Routes } from "../../enums/routes.enum";
const { Title, Paragraph } = Typography;

import { BlogPost } from "../../models/blog-post";
import AuthorAvatar from "../author/author-avatar";
import AuthorSummary from "../author/author-summary";
import { CategoryList } from "../category/categoryList";

interface BlogSummaryProps {
  blog: BlogPost;
}

const BlogSummary = ({ blog }: BlogSummaryProps) => {
  const router = useRouter();

  const navigateToBlog = (event: any) => {
    event.preventDefault();
    router.push(`${Routes.Blog}/${blog?.slug}`);
  };

  return (
    <Card
      hoverable
      style={{ padding: "8px", height: "300px", width: "100%" }}
      onClick={navigateToBlog}
    >
      <Row>
        <Col span={24}>
          <Title ellipsis level={3}>
            {blog?.title}
          </Title>
        </Col>
        <Col style={{ height: "125px" }} span={24}>
          <Paragraph ellipsis>{blog?.summary}</Paragraph>
        </Col>
        <Divider style={{ marginTop: "8px", marginBottom: "8px" }}></Divider>
        <Col span={24}>
          <CategoryList categories={blog?.categories} />
        </Col>
        <Col style={{ marginTop: "16px" }} span={24}>
          <AuthorSummary author={blog?.author} />
        </Col>
      </Row>
    </Card>
  );
};

export default BlogSummary;
