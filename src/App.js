import React, { useContext, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Link, Route, useLocation, Switch } from 'wouter';
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
import Information from 'containers/Information';
import Payment from 'containers/Payment';
import Success from 'containers/Success';
import { TopBar } from 'components/Header/Header';
import { PageHooks } from 'pages/PageHooks';
import { ConfLayout } from 'components/conf/ConfLayout';
import './App.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('');
  const [path] = useLocation();
  const color = useContext(ThemeContext);

  const getTitle = () => {
    switch (path) {
      case '/hooks':
        return 'Platzi React Hooks';
      case '/components/searchbox':
        return 'Search Box';

      default:
        return 'Bienvenido!!!';
    }
  };

  useEffect(() => {
    setTitle(getTitle());
    setShow(!path.includes('conf'));
  }, [path]);

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
        {show && <TopBar title={title} />}

        <Content style={{ margin: '64px' }}>
          {show && (
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          )}
          <div className="App">
            <Switch>
              <Route path="/">
                <Carousel>
                  <div>
                    <h3 style={contentStyle}>Home</h3>
                  </div>
                </Carousel>
              </Route>
              <Route path="/hooks" component={PageHooks} />
              <Route path="/components/searchbox" component={SearchBox} />
              <ConfLayout>
                <Route path="/conf/home" component={Home} />
                <Route path="/conf/checkout" component={Checkout} />
                <Route
                  path="/conf/checkout/information"
                  component={Information}
                />
                <Route path="/conf/checkout/payment" component={Payment} />
                <Route path="/conf/checkout/success" component={Success} />
              </ConfLayout>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
