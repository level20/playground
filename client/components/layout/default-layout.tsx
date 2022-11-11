import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import Title from "antd/lib/typography/Title";

import SideBar from "./side-bar";

const DefaultLayout = ({ hideHeader, headerTitle, children }: any) => {
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
        {!hideHeader && (
          <Header
            style={{ backgroundColor: "aquamarine", textAlign: "center" }}
          >
            <Title>{headerTitle}</Title>
          </Header>
        )}
        <Content style={{ overflow: "initial", height: "100vh" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
