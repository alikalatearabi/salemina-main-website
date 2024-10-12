// src/components/Navbar.tsx
import React from 'react';
import { Button, Layout, Menu } from 'antd';
import './index.css'

const { Header } = Layout;

const menuItems = [
  { key: '1', label: 'ویژگی ها' },
  { key: '2', label: 'نحوه کاربرد' },
  { key: '3', label: 'درباره ما' },
  { key: '4', label: 'تماس با ما' },
  { key: '5', label: 'وبلاگ' },
];

const Navbar: React.FC = () => {
  return (
    <Layout>
      <Header style={{zIndex: 1, width: '100%' }} className='navbar'>
        <div className="logo" >
          <p>سالمینا</p>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
        <Button type="primary" href="" download>
          دانلود سالمینا
        </Button>
      </Header>
    </Layout>
  );
};

export default Navbar;
