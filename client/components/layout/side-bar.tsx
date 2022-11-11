import { useRouter } from "next/router";
import { Menu, Typography, Divider, Button } from "antd";
const { Title } = Typography;
import {
  CodeOutlined,
  SolutionOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Routes } from "../../enums/routes.enum";

enum MenuItem {
  Creations = "Creations",
  Blog = "Blog",
  Studio = "Studio",
}

const items = [
  {
    key: MenuItem.Creations,
    label: MenuItem.Creations,
    route: Routes.Creations,
    icon: React.createElement(CodeOutlined),
  },
  {
    key: MenuItem.Blog,
    label: MenuItem.Blog,
    route: Routes.Blog,
    icon: React.createElement(SolutionOutlined),
  },
  {
    key: MenuItem.Studio,
    label: MenuItem.Studio,
    route: Routes.Studio,
    icon: React.createElement(DesktopOutlined),
  },
];

const SideBar = () => {
  const router = useRouter();

  const onClick = ({ item, domEvent }: any) => {
    domEvent.preventDefault();
    router.push(item?.props?.route);
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Menu theme="dark" mode="inline" items={items} onClick={onClick}></Menu>
    </>
  );
};

export default SideBar;
