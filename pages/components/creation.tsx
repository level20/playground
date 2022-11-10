import { Card } from "antd";
const { Meta } = Card;

interface CreationProps {
  title: string,
  description: string,
  coverSrc: string,
  href: string
}

const Creation = ({ title, description, coverSrc, href }: CreationProps) => {
  return (
  <>
    <Card
      hoverable
      style={{ margin: '16px' }}
      cover={<img src={coverSrc} />}
      onClick={() => window.open(href)}
    >
      <Meta title={title} description={description} />
    </Card>
  </>
  )
};

export default Creation;