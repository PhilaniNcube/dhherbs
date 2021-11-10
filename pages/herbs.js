import React, { Fragment } from 'react';
import HerbsHero from '../components/herbs/HerbsHero';
import List from '../components/herbs/List';
import fetchEntries from '../lib/client';

const herbs = ({ herbs }) => {
  return (
    <Fragment>
      <HerbsHero />
      <List herbs={herbs} />
    </Fragment>
  );
};

export default herbs;

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
