import React, { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import { Link, Route, useLocation } from 'wouter';
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
import {
  AppstoreAddOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { SearchBox } from 'components/custom/SearchBox/SearchBox';
import { ThemeContext } from 'context/ThemeContext';
import Home from 'containers/Home';
import Checkout from 'containers/Checkout';
import { TopBar } from 'components/Header/Header';
import { PageHooks } from 'pages/PageHooks';
import './App.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [path] = useLocation();
  const color = useContext(ThemeContext);

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
          className="logo"
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
          mode="inline"
        >
          <Menu.Item key="/" icon={<DesktopOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/hooks" icon={<PieChartOutlined />}>
            <Link to="/hooks">Hooks</Link>
          </Menu.Item>
          <SubMenu
            key="/components"
            icon={<AppstoreAddOutlined />}
            title="Components"
          >
            <Menu.Item key="/components/searchbox">
              <Link to="/components/searchbox">Search Box</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="/conf"
            icon={<ShoppingCartOutlined />}
            title="Platzi Conf"
          >
            <Menu.Item key="/conf/home">
              <Link to="/conf/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="/conf/checkout">
              <Link to="/conf/checkout">Checkout</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout
        className="site-layout-background"
        style={collapsed ? { marginLeft: '80px' } : { marginLeft: '200px' }}
      >
        <TopBar title="Platzi React Hooks" />

        <Content style={{ margin: '64px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="App">
            <Route path="/">
              <Carousel>
                <div>
                  <h3 style={contentStyle}>Home</h3>
                </div>
              </Carousel>
            </Route>
            <Route path="/hooks" component={PageHooks} />
            <Route path="/components/searchbox" component={SearchBox} />
            <Route path="/conf/home" component={Home} />
            <Route path="/conf/checkout" component={Checkout} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
