import React, { useState, useEffect } from 'react';
import { Button, Layout } from 'antd';
import { HashLink as Link } from 'react-router-hash-link';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';

import './index.scss';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
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
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <Layout>
      <Header style={{ zIndex: 1, width: '100%' }} className="navbar">
        <Link to={'/'} className="logo">
          <img src={logo} alt="logo" style={{ width: '45px', marginTop: '25px' }} />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <nav className="desktopMenu">
            <ul>
              <li>
                {isHomePage ? (
                  <Link smooth to="#keyFeatures">
                    ویژگی ها
                  </Link>
                ) : (
                  <Link to="/#keyFeatures">ویژگی ها</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <Link smooth to="#dependency">
                    بیانیه سالمینا
                  </Link>
                ) : (
                  <Link to="/dependency">بیانیه سالمینا</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <Link smooth to="#aboutSection">
                    درباره ما
                  </Link>
                ) : (
                  <Link to="/story">درباره ما</Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <Link smooth to="#blogSection">
                    وبلاگ
                  </Link>
                ) : (
                  <Link to="/blog">وبلاگ</Link>
                )}
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
                    {isHomePage ? (
                      <Link smooth to="#keyFeatures" onClick={toggleMenu}>
                        ویژگی ها
                      </Link>
                    ) : (
                      <Link to="/#keyFeatures" onClick={toggleMenu}>
                        ویژگی ها
                      </Link>
                    )}
                  </li>
                  <li>
                    {isHomePage ? (
                      <Link smooth to="#dependency" onClick={toggleMenu}>
                        بیانیه سالمینا
                      </Link>
                    ) : (
                      <Link to="/dependency" onClick={toggleMenu}>
                        بیانیه سالمینا
                      </Link>
                    )}
                  </li>
                  <li>
                    {isHomePage ? (
                      <Link smooth to="#aboutSection" onClick={toggleMenu}>
                        درباره ما
                      </Link>
                    ) : (
                      <Link to="/story" onClick={toggleMenu}>
                        درباره ما
                      </Link>
                    )}
                  </li>
                  <li>
                    {isHomePage ? (
                      <Link smooth to="#blogSection" onClick={toggleMenu}>
                        وبلاگ
                      </Link>
                    ) : (
                      <Link to="/blog" onClick={toggleMenu}>
                        وبلاگ
                      </Link>
                    )}
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