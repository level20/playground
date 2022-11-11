import { useRouter } from "next/router";
import { Menu, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Routes } from "../enums/routes.enum";

enum MenuItem {
  Blog = "Blog",
}

const items: MenuProps["items"] = [
  {
    key: MenuItem.Blog,
    icon: React.createElement(UserOutlined),
    label: MenuItem.Blog,
  },
];

const SideBar = () => {
  const router = useRouter();

  const onClick = ({ key, domEvent }: any) => {
    domEvent.preventDefault();
    switch (key) {
      case MenuItem.Blog:
        router.push(Routes.Blog);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Menu theme="dark" mode="inline" items={items} onClick={onClick}></Menu>
    </>
  );
};

export default SideBar;
