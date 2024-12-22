// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './index.scss'

const { Header } = Layout;

const menuItems = [
  { key: '1', label: 'ویژگی ها' },
  { key: '2', label: 'نحوه کاربرد' },
  { key: '3', label: 'درباره ما' },
  { key: '4', label: 'تماس با ما' },
  { key: '5', label: 'وبلاگ' },
];

const Navbar: React.FC = () => {
  const [collapsed] = useState(false);

  return (
    <Layout>
      <Header style={{ zIndex: 1, width: '100%' }} className='navbar'>
        <Link to={'/'} className="logo">
          <p>سالمینا</p>
        </Link>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          style={{ display: collapsed ? 'none' : 'flex' }}
        />
        <Button type="primary" href="" download className='headerDownloadButton'>
          دانلود سالمینا
        </Button>
      </Header>
    </Layout>
  );
};

export default Navbar;
