import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";
import { BlogPost } from "../models/blog-post";

interface BlogSummaryProps {
  blog: BlogPost;
}

const BlogSummary = ({ blog }: BlogSummaryProps) => {
  return (
    <>
      <Card title={blog.title}>
        <Row>
          <Col span={6}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Col>
          <Col span={18}>
            <Typography>Nick Natoli</Typography>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Typography>
              This is a description of a blog post. It is going to be a fairly
              long description. Do we want it to be this long? Idk I guess I
              will see when I view the page
            </Typography>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default BlogSummary;
