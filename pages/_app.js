import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';
import Banner from '../components/Banner';
import BannerHead from '../components/BannerHead';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
        <div className='Banner-Head'>
          <BannerHead count={2} prefix="left" />
        </div>
      <main className='container'>
        <div className='Banner-Left'>
          <Banner count={2} prefix="left" />
        </div>
        <div className='container-post'>
          <Component {...pageProps} />
        </div>
        <div className='Banner-Right'>
          <Banner count={2} prefix="right" />
        </div>
      </main>
    </>
  );
}

export default MyApp;
