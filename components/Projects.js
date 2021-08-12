import LargeCard from './LargeCard';

function Projects() {
  return (
    <div className="flex flex-col w-full pt-4 pb-8">
      <h4 className="text-sm font-bold text-red-500 md:pl-2 uppercase pb-3">
        Projects
      </h4>
      <div className="max-w-4xl mx-auto text-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <LargeCard
            name="Freecourseyard"
            description="It is a web application which helps to find free online best courses
            from all across the Internet. Build with React JS, Chakra UI, Node js
            and MongoDB."
            githubLink="https://github.com/ArindamBiswas-dev/freecourseyard-ui-new"
            liveLink="https://freecourseyard.netlify.app/"
            image="/freecourseyardImg.png"
          />
          <LargeCard
            name="My Portfolio"
            description="This is my portfolio website. Build using React Js and Chakra UI."
            githubLink="https://github.com/ArindamBiswas-dev/myportfolio-new"
            liveLink="https://arindambiswas.netlify.app/"
            image="/portfolioImg.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
