import Link from 'next/link';
import Image from 'next/image';

export default function List({ herbs }) {
  console.log(herbs);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {herbs.map((herb, index) => {
          return (
            <div
              key={index}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <span className="object-cover w-full h-64 rounded">
                <Image
                  className="object-cover w-full h-64 rounded"
                  src={`https:${herb.image.fields.file.url}`}
                  alt=""
                  width={herb.image.fields.file.details.image.width}
                  height={herb.image.fields.file.details.image.height}
                />
              </span>

              <div className="py-5">
                <div className="flex justify-between">
                  {herb.tags.map((tag, index) => {
                    return (
                      <p
                        key={index}
                        className="mb-2 text-xs font-semibold text-center w-24 py-1 rounded-lg bg-green-800 text-white uppercase"
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>

                <span
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <Link href={`/herbs/${herb.slug}`}>
                    <a className="text-2xl font-bold leading-5">{herb.name}</a>
                  </Link>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
