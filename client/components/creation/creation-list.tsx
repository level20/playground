import { Col, List, Row } from "antd";
import { Creation as CreationContent } from "../../models/creation";
import Creation from "./creation";

interface CreationListProps {
  creations: CreationContent[];
}

const CreationList = ({ creations }: CreationListProps) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={creations}
      renderItem={(creation) => (
        <List.Item>
          <Creation
            title={creation.title}
            description={creation.description}
            coverSrc={creation.coverSrc}
            href={creation.href}
          />
        </List.Item>
      )}
    />
  );
};

export default CreationList;
