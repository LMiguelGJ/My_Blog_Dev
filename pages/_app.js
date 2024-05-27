import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';
import Banner from '../components/Banner';
import Banner300 from '../components/Banner300';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Banner />
      <main className='container'>
      <Banner300 />

        <div className='container-post'>
          <Component {...pageProps} />
        </div>


      </main>
    </>
  );
}

export default MyApp;
