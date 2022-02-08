import React from 'react';
import {useState, useEffect} from 'react';
import {Navigation} from './portalnavigation';
import {Header} from './header';
import JsonData from '../data/data.json';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
    </div>
  );
};

export default Home;
