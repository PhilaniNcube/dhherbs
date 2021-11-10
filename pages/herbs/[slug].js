import React from 'react';
import Image from 'next/image';
import { client } from '../../lib/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const herb = ({ herb }) => {
  console.log(herb);
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <Image
          src={`https:${herb.fields.image.fields.file.url}`}
          width={1920}
          height={1280}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-coolGray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 z-30 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
          <div className="space-y-2">
            <p className="inline-block text-2xl text-white font-semibold sm:text-3xl">
              {herb.fields.name}
            </p>
          </div>
          <div className="text-gray-100">
            <p>{documentToReactComponents(herb.fields.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default herb;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'herbs',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'herbs',
    'fields.slug': params.slug,
  });

  return {
    props: {
      herb: items[0],
    },
  };
}
