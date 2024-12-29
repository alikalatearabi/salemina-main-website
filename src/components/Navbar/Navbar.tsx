import React, { useState, useEffect } from 'react';
import { Button, Layout } from 'antd';
import { HashLink as Link } from 'react-router-hash-link';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/images/Logo.svg';

import './index.scss';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      // Toggle the overflow style when the menu is toggled
      if (!prev) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return !prev;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Cleanup overflow style when component unmounts or menu is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Layout>
      <Header style={{ zIndex: 1, width: '100%' }} className="navbar">
        <Link to={'/'} className="logo">
        <img src={logo} alt="logo" style={{ width: '45px', marginTop: '25px'}} />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <nav className="desktopMenu">
            <ul>
              <li>
                <Link smooth to="#keyFeatures">ویژگی ها</Link>
              </li>
              <li>
                <Link smooth to="#infoCardSection">نحوه کاربرد</Link>
              </li>
              <li>
                <Link smooth to="#aboutSection">درباره ما</Link>
              </li>
              <li>
                <Link smooth to="#blogSection">وبلاگ</Link>
              </li>
            </ul>
          </nav>
        )}

        <Button type="primary" href="" download className="headerDownloadButton">
          دانلود سالمینا
        </Button>

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <>
            {isMenuOpen && <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}
            <div className={`hamburgerMenu ${isMenuOpen ? 'open' : ''}`}>
              <nav className="mobileMenu">
                <img src={logo} alt="logo" style={{ width: '80px', marginBottom: '20px' }} />
                <Button type="primary" href="" download className="headerDownloadButton mobileDownloadButton">
                  دانلود سالمینا
                </Button>
                <ul>
                  <li>
                    <Link smooth to="#keyFeatures" onClick={toggleMenu}>
                      ویژگی ها
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="#infoCardSection" onClick={toggleMenu}>
                      نحوه کاربرد
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="#aboutSection" onClick={toggleMenu}>
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="#blogSection" onClick={toggleMenu}>
                      وبلاگ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <MenuOutlined className="menuToggle" onClick={toggleMenu} />
          </>
        )}

      </Header>
    </Layout>
  );
};

export default Navbar;
