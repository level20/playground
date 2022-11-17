import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
const { Header, Sider, Content } = Layout;
import Title from "antd/lib/typography/Title";
import SideBar from "./side-bar";

const DefaultLayout = ({ hideHeader, headerTitle, children }: any) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideBar />
      </Sider>

      <Layout>
        {!hideHeader && (
          <Header style={{ textAlign: "center" }}>
            <Title level={1} style={{ color: "#fff", margin: "8px" }}>
              {headerTitle}
            </Title>
          </Header>
        )}
        <Content
          style={{
            overflow: "scroll",
            height: "100%",
            padding: "16px",
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Level20 Playground ©2022 Created by Level20
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
