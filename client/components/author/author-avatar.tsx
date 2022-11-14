import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

interface AuthorAvatarProps {
  src?: string;
}

const AuthorAvatar = ({ src }: AuthorAvatarProps) => {
  if (!src) return <Avatar icon={<UserOutlined />}></Avatar>;

  return <Avatar src={src}></Avatar>;
};

export default AuthorAvatar;
