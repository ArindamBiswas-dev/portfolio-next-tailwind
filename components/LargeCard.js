import Image from 'next/image';

function LargeCard({ name, description, githubLink, liveLink, image }) {
  return (
    <div
      className="flex flex-col w-full p-2 md:p-3 border 
        hover:border-gray-200 rounded-lg shadow-lg
        hover:shadow-xl hover:scale-105
        transition transform duration-300 ease-out cursor-pointer hover:rotate-1"
    >
      <div className="relative h-40 w-full">
        <Image
          src={image}
          layout="fill"
          className="rounded-lg"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="pl-1">
        <h4 className="text-md font-semibold pt-3 text-gray-800">{name}</h4>
        <p className="text-base text-justify pt-2 text-gray-500 font-normal">
          {description}
        </p>
      </div>
      <div className="pt-5 pl-1 text-sm flex justify-between text-white font-semibold pb-2 mt-auto">
        <button
          className="bg-black px-4 py-2 rounded-lg font-semibold uppercase"
          onClick={(e) => window.open(githubLink)}
        >
          Github
        </button>
        <button
          className="bg-blue-700 px-4 py-2 rounded-lg font-semibold uppercase"
          onClick={(e) => window.open(liveLink)}
        >
          Live Url
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
