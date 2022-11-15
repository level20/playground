import { Card, Typography } from "antd";
import { Author } from "../../models/author";
import AuthorAvatar from "./author-avatar";

interface AuthorSummaryProps {
  author: Author;
}

const AuthorSummary = ({ author }: AuthorSummaryProps) => {
  return (
    <Card.Meta
      title={<Typography.Title level={5}>{author?.name}</Typography.Title>}
      avatar={<AuthorAvatar src={author?.image}></AuthorAvatar>}
      style={{ alignItems: "baseline" }}
    ></Card.Meta>
  );
};

export default AuthorSummary;
