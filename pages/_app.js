import Header from '../components/Header'
import '../styles/globals.css'
import Banner from '../components/Banner';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <Banner />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
