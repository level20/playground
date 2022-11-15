import { Card, Col, Divider, Row, Typography } from "antd";
import Image from "next/image";
import AuthorAvatar from "../author/author-avatar";
import { Creation as CreationType } from "../../models/creation";
import { CategoryList } from "../category/categoryList";
import AuthorSummary from "../author/author-summary";
const { Meta } = Card;

interface CreationProps {
  creation: CreationType;
}

const Creation = ({ creation }: CreationProps) => {
  return (
    <>
      <Card
        hoverable
        style={{ padding: "8px", height: "500px", width: "100%" }}
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
        <Meta
          style={{ height: "100px" }}
          title={creation?.title}
          description={creation?.description}
        />
        <Divider></Divider>
        <Row>
          <Col span={24}>
            <CategoryList categories={creation.categories} />
          </Col>
          <Col style={{ marginTop: "8px" }} span={24}>
            <AuthorSummary author={creation.author} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Creation;
