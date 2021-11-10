import { Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Hero = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-green-700 sm:text-4xl sm:leading-none">
                DH HERBS
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                We produce organically farmed culinary herbs that will be great
                additions to kitchen. Wether fresh or dried these herbs can
                transform everyday dishes. Some of the herbs even have numerous
                health benefits.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="/images/tree.svg"
                    alt=""
                    className="w-12 h-12 rounded-full p-2"
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Organic Farming Methods
                </h6>
                <p className="text-sm text-gray-900">
                  We only use natural methods to produce our herbs without
                  harmful chemicals.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="/images/plant.svg"
                    alt=""
                    className="w-12 h-12 rounded-full p-2"
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5">Fresh Or Dried</h6>
                <p className="text-sm text-gray-900">
                  We produce fresh & dried herbs. Dried herbs have more flavour
                  & fragrances.
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="object-cover w-full h-56 rounded shadow-lg sm:h-96">
              <Image
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/herbs.jpg"
                alt=""
                width={1000}
                height={700}
              />
            </span>
          </div>
        </div>
      </div>
      <section className="py-6 text-green-600">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-bold leading-tight text-center lg:text-left">
            Click to see the available herbs
          </h1>
          <button
            className="px-8 py-3 text-lg font-semibold rounded bg-green-700 text-white"
            onClick={() => router.push('/herbs')}
          >
            HERBS
          </button>
        </div>
      </section>
    </Fragment>
  );
};
