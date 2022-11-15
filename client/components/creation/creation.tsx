import { Card, Col, Divider, Row, Typography } from "antd";
import Image from "next/image";
import AuthorAvatar from "../author/author-avatar";
import { Creation as CreationType } from "../../models/creation";
import { CategoryList } from "../category/categoryList";
const { Meta } = Card;

interface CreationProps {
  creation: CreationType;
}

const Creation = ({ creation }: CreationProps) => {
  return (
    <>
      <Card
        hoverable
        style={{ margin: "16px" }}
        cover={
          <Image
            src={creation?.coverSrc}
            alt={creation?.title}
            width={150}
            height={250}
          />
        }
        onClick={() => window.open(creation?.href)}
      >
        <Meta title={creation?.title} description={creation?.description} />
        <Divider></Divider>
        <Row>
          <Col span={24}>
            <Card.Meta
              title={
                <Typography.Title level={5}>
                  {creation?.author?.name}
                </Typography.Title>
              }
              avatar={
                <AuthorAvatar src={creation?.author?.image}></AuthorAvatar>
              }
              style={{ alignItems: "baseline" }}
            ></Card.Meta>
          </Col>
        </Row>
        <Row style={{ marginTop: "8px" }}>
          <Col span={24}>
            <CategoryList categories={creation.categories} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Creation;
