import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

function Header() {
  return (
    <header
      className="absolute top-0 flex 
      justify-between w-full px-6 py-4 md:px-14 md:py-6
      bg-transparent z-50 text-white items-center"
    >
      <h2 className="font-bold text-lg uppercase">Arindam Biswas</h2>
      <div className="flex space-x-3">
        <a
          href="https://twitter.com/arindam_b12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/arindam-biswas-164b171b6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/ArindamBiswas-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;

{
  /* <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
        <Image src="/banner.jpg" layout="fill" objectFit="cover" />
      </div> */
}
