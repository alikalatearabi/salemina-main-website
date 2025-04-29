import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import KeyFeatures from './components/KeyFeatures/keyFeatures';
import InfoCard from './components/Information/infoCard';
import { infoCardText } from './components/Information/infoCardDesc';
import Dependency from './components/Dependency/dependency';
import Story from './components/Story/story';
// import Blog from './components/Blog/blog';
import Footer from './components/Footer/footer';
import DependencyPage from './components/DependencyPage/dependency_page';
import StoryPage from './components/StoryPage/story_page';
import BlogPage from './components/BlogPage/blog_page';
import BlogDetails from './components/BlogPage/BlogDetails';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout style={{ height: '100%' }}>
        <Navbar />
        <Content style={{ backgroundColor: '#fff', height: 'Calc(100% - 70px)' }}>
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <KeyFeatures />
                <InfoCard
                  id="infoCardSection"
                  title={infoCardText[0].title}
                  description={infoCardText[0].description}
                  direction="rtl"
                  justify="justify"
                  image={infoCardText[0].image}
                />
                <InfoCard title={infoCardText[1].title} description={infoCardText[1].description} direction='ltr' justify='end' image={infoCardText[1].image} />
                <InfoCard title={infoCardText[2].title} description={infoCardText[2].description} direction='rtl' justify='justify' image={infoCardText[2].image} />
                {/*<InfoCard title={infoCardText[3].title} description={infoCardText[3].description} direction='ltr' justify='end' image={infoCardText[3].image} /> */}
                <Dependency />
                <Story />
                {/* <Blog /> */}
              </>
            }>
            </Route>
            <Route path="/dependency" element={<DependencyPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
          <Footer />
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
