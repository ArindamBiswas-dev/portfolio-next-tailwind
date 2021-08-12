import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-semibold">
        Let's keep in touch!
      </h2>
      <p className="text-gray-600 md:text-lg pt-1">
        Find me on any of these platforms
      </p>
      <div className="flex pt-5 md:pt-8 space-x-3 pb-10">
        <CircleDiv
          icon={<SiTwitter className="text-blue-400" />}
          link="https://twitter.com/arindam_b12"
        />
        <CircleDiv
          icon={<MdEmail className="text-red-400" />}
          link="mailto:arindambiswas616@gmail.com"
        />
        <CircleDiv
          icon={<SiLinkedin className="text-blue-700" />}
          link="https://www.linkedin.com/in/arindam-biswas-164b171b6"
        />
        <CircleDiv
          icon={<SiGithub className="text-gray-800" />}
          link="https://github.com/ArindamBiswas-dev"
        />
      </div>
    </>
  );
}

export default Contact;

function CircleDiv({ icon, link }) {
  return (
    <a href={link} target="_blank">
      <div className="p-3 bg-white flex justify-center items-center rounded-full cursor-pointer shadow-lg">
        {icon}
      </div>
    </a>
  );
}
