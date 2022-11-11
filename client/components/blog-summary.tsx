import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;

import { BlogPost } from "../models/blog-post";

interface BlogSummaryProps {
  blog: BlogPost;
}

const BlogSummary = ({ blog }: BlogSummaryProps) => {
  return (
    <>
      <Card
        title={<Title level={4}>{blog?.title}</Title>}
        style={{ padding: "16px", height: "300px", width: "100%" }}
      >
        <AuthorRow author={blog?.author}></AuthorRow>
        <Divider
          dashed={true}
          style={{ marginTop: "8px", marginBottom: "8px" }}
        />
        <Row>
          <Col span={24}>
            <Paragraph ellipsis>{blog?.summary}</Paragraph>
          </Col>
        </Row>
      </Card>
    </>
  );
};

const AuthorRow = ({ author }: any) => {
  return (
    <Row align="middle">
      <Col span={4}>
        <Avatar size="large" icon={<UserOutlined />} src={author?.image} />
      </Col>
      <Col span={20}>
        <Title level={5}>{author?.name}</Title>
      </Col>
    </Row>
  );
};

export default BlogSummary;
