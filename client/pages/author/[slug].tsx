import { Avatar, Col, Divider, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
import DefaultLayout from "../../components/layout/default-layout";
import { ContentType } from "../../enums/content-type.enum";
import { Author } from "../../models/author";
import { getAuthor } from "../../services/author.service";
import { getSlugPaths } from "../../services/query.service";

interface AuthorProps {
  author: Author;
}

const Author = ({ author }: AuthorProps) => {
  return (
    <DefaultLayout hideHeader>
      <Row style={{ width: "100%", textAlign: "center" }}>
        <Col span={24}>
          <Avatar size={275} src={author?.image}></Avatar>
        </Col>
        <Col style={{ marginTop: "16px" }} span={24}>
          <Title>{author?.name}</Title>
        </Col>
      </Row>
      <Divider style={{ marginBottom: "16px", marginTop: "16px" }} />
      <Row style={{ width: "100%" }}>
        <Col span={24}>
          <Paragraph>{author?.bio}</Paragraph>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const paths = await getSlugPaths(ContentType.author);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const author = await getAuthor(slug);

  return {
    props: {
      author,
    },
  };
}

export default Author;
