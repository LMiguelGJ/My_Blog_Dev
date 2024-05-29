import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';
import PopunderScript from '../components/PopunderScript';
// import Banner from '../components/Banner';
// import BannerHead from '../components/BannerHead';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <PopunderScript uniqueKey="Banner-Head" />
        {/* <div className='Banner-Head'>
          <BannerHead count={1} prefix="left" />
        </div> */}
      <main className='container'>
      <PopunderScript uniqueKey="Banner-Left" />
        {/* <div className='Banner-Left'>
          <Banner count={1} prefix="left" />
        </div> */}
        <div className='container-post'>
          <Component {...pageProps} />
        </div>
        <PopunderScript uniqueKey="Banner-Right" />
        {/* <div className='Banner-Right'>
          <Banner count={1} prefix="right" />
        </div> */}
      </main>
    </>
  );
}

export default MyApp;
