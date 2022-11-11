import { Col, Row } from "antd";
import { Creation as CreationContent } from "../../models/creation";
import Creation from "./creation";

interface CreationListProps {
  creations: CreationContent[];
}

const CreationList = ({ creations }: CreationListProps) => {
  return (
    <Row>
      {creations.map((creation, i) => (
        <Col key={`creation-${i}`} span={8}>
          <Creation
            title={creation.title}
            description={creation.description}
            coverSrc={creation.coverSrc}
            href={creation.href}
          />
        </Col>
      ))}
    </Row>
  );
};

export default CreationList;
