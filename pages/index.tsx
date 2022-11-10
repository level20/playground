import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import Title from 'antd/lib/typography/Title';

import SideBar from './components/side-bar';
import CreationContainer from './components/creation-container';

export default function Home() {
  return (
    <Layout hasSider>
      <Sider      
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}>
        <SideBar/>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{backgroundColor: '#D3D3D3'}}>            
          <Title>Playground</Title>
        </Header>
        <Content style={{ overflow: 'initial' }}>
          <CreationContainer/>
        </Content>
        <Footer style={{backgroundColor: '#D3D3D3'}}>Footer</Footer>
      </Layout>
    </Layout>
  )
}
