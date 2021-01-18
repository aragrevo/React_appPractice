import './App.css';
import 'antd/dist/antd.css';
import { useContext, useState } from 'react';
import { Link, Route, useLocation } from 'wouter';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Carousel } from 'antd';
import {
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { TopBar } from './components/Header/Header';
import { PageHooks } from './pages/PageHooks';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { ThemeContext } from 'context/ThemeContext';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [path, setPath] = useLocation();
  const color = useContext(ThemeContext);
  console.log(color);

  console.log(path);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const contentStyle = {
    height: '80vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div
          className='logo'
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <Menu
          theme={color === 'white' ? 'dark' : 'light'}
          defaultSelectedKeys={['/']}
          selectedKeys={[path]}
          mode='inline'
        >
          <Menu.Item key='/' icon={<DesktopOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='/hooks' icon={<PieChartOutlined />}>
            <Link to='/hooks'>Hooks</Link>
          </Menu.Item>
          <SubMenu key='/components' icon={<UserOutlined />} title='Components'>
            <Menu.Item key='/components/searchbox'>
              <Link to='/components/searchbox'>Search Box</Link>
            </Menu.Item>
            {/* <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item> */}
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
      <Layout
        className='site-layout-background'
        style={collapsed ? { marginLeft: '80px' } : { marginLeft: '200px' }}
      >
        <TopBar title='Platzi React Hooks' />

        <Content style={{ margin: '64px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='App'>
            <Route path='/'>
              <Carousel>
                <div>
                  <h3 style={contentStyle}>Home</h3>
                </div>
              </Carousel>
            </Route>
            <Route path='/hooks' component={PageHooks} />
            <Route path='/components/searchbox' component={SearchBox} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
