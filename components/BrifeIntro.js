import Image from 'next/image';
import { FaUniversity } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdMail } from 'react-icons/md';

function BrifeIntro() {
  const onClick = () => {
    window.open('http://www.google.com');
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0">
        <div></div>
        <div className="flex">
          <div className="relative w-36 h-36 md:w-52 md:h-52 -mt-28 mx-auto rounded-full shadow-md">
            <Image
              src="/pro.jpeg"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="self-center flex space-x-3 mx-auto md:ml-auto">
          <button
            className="bg-red-500 p-2 rounded-md
             text-white text-sm font-bold mx-auto uppercase"
            onClick={(e) => window.open('mailto:arindambiswas616@gmail.com')}
          >
            <MdMail className="mx-1" />
          </button>
          <button
            className="bg-red-500 p-2 rounded-md
             text-white text-sm font-bold mx-auto uppercase"
            onClick={(e) => window.open('https://arindambiswas.hashnode.dev/')}
          >
            Visit My Tech Blogs
          </button>
        </div>
      </div>
      <h2 className="text-center pt-10 text-3xl md:text-4xl font-bold">
        Arindam Biswas
      </h2>
      <h2 className="text-center pt-3 pb-10 text-md font-bold text-gray-400 uppercase">
        <HiLocationMarker className="inline-block pb-1 text-xl mr-1" />
        Kolkata, India
      </h2>
      <h2 className="text-center pt-2 pb-8 text-md font-normal text-gray-500">
        <FaUniversity className="inline-block pb-1 h-6 mr-2" />
        B.Tech in Computer Science Engineering
      </h2>
    </div>
  );
}

export default BrifeIntro;
