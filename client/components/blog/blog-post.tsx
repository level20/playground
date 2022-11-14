import { Col, Divider, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { Routes } from "../../enums/routes.enum";
const { Title, Paragraph, Text } = Typography;

import { BlogPost } from "../../models/blog-post";
import AuthorAvatar from "./author/author-avatar";

interface BlogPostProps {
  blog: BlogPost;
}
const BlogPost = ({ blog }: BlogPostProps) => {
  const router = useRouter();

  const navigateToAuthor = (event: any) => {
    event.preventDefault();
    router.push(`${Routes.Author}/${blog?.author?.slug}`);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <Row style={{ width: "100%" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title>{blog?.title}</Title>
        </Col>
      </Row>
      <Row style={{ width: "100%" }} onClick={navigateToAuthor}>
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <AuthorAvatar src={blog?.author?.image}></AuthorAvatar>
          <Title level={5} style={{ marginLeft: "8px" }}>
            {blog?.author?.name}
          </Title>
        </Col>
      </Row>
      <Row style={{ width: "100%", marginTop: "8px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Text italic>{`created on: ${formatDate(
            blog?._createdAt ?? ""
          )}, last updated on: ${formatDate(blog?._updatedAt ?? "")}`}</Text>
        </Col>
      </Row>
      <Divider style={{ marginBottom: "16px", marginTop: "16px" }} />
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          <Paragraph>{blog?.body}</Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default BlogPost;
