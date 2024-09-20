import React from 'react';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import FeaturedArticles from '../components/FeaturedArticles';
import FeaturedTutorials from '../components/FeaturedTutorials';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <MainBanner />
    <FeaturedArticles />
    <FeaturedTutorials />
    <NewsletterSignup />
    <Footer />
  </div>
);

export default Home;
