import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Typography } from "antd";
const { Text, Paragraph } = Typography;
import { BlogPost } from "../models/blog-post";

interface BlogSummaryProps {
  blog: BlogPost;
}

const BlogSummary = ({ blog }: BlogSummaryProps) => {
  return (
    <>
      <Card
        title={blog?.title}
        style={{ padding: "16px", minWidth: "450px", minHeight: "300px" }}
      >
        <AuthorRow author={blog?.author}></AuthorRow>
        <Divider
          dashed={true}
          style={{ marginTop: "8px", marginBottom: "8px" }}
        />
        <Row>
          <Col span={24}>
            <Paragraph>{blog?.body}</Paragraph>
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
        <Text>{author?.name}</Text>
      </Col>
    </Row>
  );
};

export default BlogSummary;
