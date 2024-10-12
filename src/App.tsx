import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Layout } from 'antd';
import './App.css'

import Home from './components/Home/home';
import KeyFeatures from './components/KeyFeatures/keyFeatures';
import InfoCard from './components/Information/infoCard';
import { infoCardText } from './components/Information/infoCardDesc';
import Dependency from './components/Dependency/dependency';
import Suggestions from './components/Suggestions/suggestions';
import Story from './components/Story/story';
import Blog from './components/Blog/blog';


const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Navbar />
      <Content style={{ backgroundColor: '#fff', height: 'Calc(100% - 70px)' }}>
        <Home />
        <KeyFeatures />
        <InfoCard title={infoCardText[0].title} description={infoCardText[0].description} direction='rtl' justify='justify' image={infoCardText[0].image} />
        <InfoCard title={infoCardText[1].title} description={infoCardText[1].description} direction='ltr' justify='end' image={infoCardText[1].image} />
        <InfoCard title={infoCardText[2].title} description={infoCardText[2].description} direction='rtl' justify='justify' image={infoCardText[2].image} />
        <InfoCard title={infoCardText[3].title} description={infoCardText[3].description} direction='ltr' justify='end' image={infoCardText[3].image} />
        <Dependency />
        <Suggestions />
        <Story />
        <Blog />
      </Content>
    </Layout>
  );
};

export default App;
