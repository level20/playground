import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
const { Header, Sider, Content } = Layout;
import Title from "antd/lib/typography/Title";
import SideBar from "./side-bar";

const DefaultLayout = ({ hideHeader, headerTitle, children }: any) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <Title level={2} style={{ color: "#fff" }}>
            Playground
          </Title>
        </div>
        <SideBar />
      </Sider>
      <Layout>
        {!hideHeader && (
          <Header className="site-layout-sub-header-background">
            <Title level={1} style={{ color: "#fff", margin: '8px' }}>
              {headerTitle}
            </Title>
          </Header>
        )}
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            height: "100vh",
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, height: "100vh" }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Level20 Playground ©2022 Created by Level20
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
