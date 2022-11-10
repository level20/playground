import { Layout } from 'antd'
import Title from 'antd/lib/typography/Title';
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Sider      
        style={{
          overflow: 'auto',
          height: '100vh',
          backgroundColor: '#bf00ff'
        }}>
      </Sider>
      <Layout>
        <Header style={{backgroundColor: '#D3D3D3'}}>            
          <Title>Playground</Title>
        </Header>
        <Content>Content</Content>
        <Footer style={{backgroundColor: '#D3D3D3'}}>Footer</Footer>
      </Layout>
    </Layout>
  )
}
