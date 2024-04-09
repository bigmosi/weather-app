import React, { useState, useEffect } from 'react';
import {
  Layout,
  Avatar,
  Menu,
  Breadcrumb,
} from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
} from '@ant-design/icons';

import Weather from './pages/weather/weather';

const { Header, Sider, Content: AntdContent } = Layout;

function App() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header>
          <Avatar
            icon="user"
            style={{
              float: 'right',
              background: '#fff',
              color: '#000',
              padding: '20px',
              marginTop: '6px',
            }}
          />
        </Header>
        <Layout>
          <Sider
            collapsed={collapsed}
            onCollapse={toggleSidebar}
            style={{ height: '100vh' }}
          >
            <Menu
              onClick={({ key }) => {
                navigate(key);
              }}
              defaultSelectedKeys={[window.location.pathname]}
              style={{ color: '#a4b4cb', fontFamily: 'Ubuntu' }}
              theme="dark"
            >
              <Menu.Item key="/" icon={<HomeOutlined />}>
                Dashboard
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ background: '#fff' }}>
            <AntdContent style={{ padding: '0 48px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item className="fw-bold fs-4" style={{ fontFamily: 'Ubuntu' }}>Welcome to Weather Focus Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: '550px' }}>
                <Content />
              </div>
            </AntdContent>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
