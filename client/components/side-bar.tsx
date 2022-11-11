import { useRouter } from "next/router";
import { Menu, MenuProps } from "antd";
import { CodeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Routes } from "../enums/routes.enum";

enum MenuItem {
  Creations = "Creations",
  Blog = "Blog",
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
    icon: React.createElement(UserOutlined),
  },
];

const SideBar = () => {
  const router = useRouter();

  const onClick = ({ item, domEvent }: any) => {
    domEvent.preventDefault();
    router.push(item?.props?.route);
  };

  return (
    <>
      <Menu theme="dark" mode="inline" items={items} onClick={onClick}></Menu>
    </>
  );
};

export default SideBar;
