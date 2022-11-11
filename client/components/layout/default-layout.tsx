import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Title from "antd/lib/typography/Title";

import SideBar from "../side-bar";

const DefaultLayout = ({ children }: any) => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <SideBar />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ backgroundColor: "#D3D3D3" }}>
          <Title>Playground</Title>
        </Header>
        <Content style={{ overflow: "initial" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;