import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/layout/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
