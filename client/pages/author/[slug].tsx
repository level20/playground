import { Col, Divider, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
import DefaultLayout from "../../components/layout/default-layout";
import { Author } from "../../models/author";
import { getAuthor, getSlugPaths } from "../../services/author.service";

interface AuthorProps {
  author: Author;
}

const Author = ({ author }: AuthorProps) => {
  return (
    <DefaultLayout hideHeader>
      <Row style={{ marginLeft: "16px", marginRight: "16px" }}>
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Title>{author?.name}</Title>
          </Col>
        </Row>
        <Divider style={{ marginBottom: "16px", marginTop: "16px" }} />
        <Row style={{ width: "100%" }}>
          <Col span={24}>
            <Paragraph>{author?.name}</Paragraph>
          </Col>
        </Row>
      </Row>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const paths = await getSlugPaths();
  console.log(paths);

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
