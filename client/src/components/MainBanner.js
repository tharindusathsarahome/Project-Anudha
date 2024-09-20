import React from 'react';
import { Image } from 'semantic-ui-react';
import bannerImage from '../assets/banner.jpg';

const MainBanner = () => (
  <Image style={{ height: '500px' }} src={bannerImage} fluid/>
);

export default MainBanner;