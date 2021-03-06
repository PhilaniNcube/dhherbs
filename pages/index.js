import Head from 'next/head';
import { Fragment } from 'react';
import { Hero } from '../components/home/Hero';
import fetchEntries from '../lib/client';

export default function Home({ herbs }) {
  console.log(herbs);
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await fetchEntries();
  const herbs = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      herbs,
    },
  };
}
