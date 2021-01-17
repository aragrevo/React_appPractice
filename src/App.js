import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Characters } from './components/Characters/Characters';
import { TopBar } from './components/Header/Header';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div
          className='logo'
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1' icon={<PieChartOutlined />}>
            Hooks
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9' icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout-background'>
        <TopBar title='Platzi React Hooks' />

        <Content style={{ margin: '64px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='App'>
            <Characters />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
