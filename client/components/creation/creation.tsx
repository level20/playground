import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;

interface CreationProps {
  title: string;
  description: string;
  coverSrc: string;
  href: string;
}

const Creation = ({ title, description, coverSrc, href }: CreationProps) => {
  return (
    <>
      <Card
        hoverable
        style={{ margin: "16px" }}
        cover={<Image src={coverSrc} alt={title} width={150} height={250} />}
        onClick={() => window.open(href)}
      >
        <Meta title={title} description={description} />
      </Card>
    </>
  );
};

export default Creation;