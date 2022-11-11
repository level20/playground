import { Col, Row } from "antd";
import Creation from "./creation";

export interface Creation {
  _id: string;
  _type: string;
  title: string;
  description: string;
  coverSrc: string;
  href: string;
}

interface CreationContainerProps {
  creations: Creation[];
}


const CreationContainer = ({ creations }: CreationContainerProps) => {
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

export default CreationContainer;
