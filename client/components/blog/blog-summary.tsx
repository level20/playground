import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Tooltip, Typography } from "antd";
import { useRouter } from "next/router";
import { Routes } from "../../enums/routes.enum";
const { Title, Paragraph } = Typography;

import { BlogPost } from "../../models/blog-post";
import AuthorAvatar from "./author/author-avatar";

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
      title={<Title level={3}>{blog?.title}</Title>}
      style={{ padding: "16px", height: "300px", width: "100%" }}
      onClick={navigateToBlog}
    >
      <Card.Meta
        title={<Title level={5}>{blog?.author?.name}</Title>}
        avatar={<AuthorAvatar src={blog?.author?.image}></AuthorAvatar>}
        style={{ alignItems: "baseline" }}
      ></Card.Meta>
      <Row style={{ marginTop: "8px" }}>
        <Col span={24}>
          <Paragraph ellipsis>{blog?.summary}</Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogSummary;
