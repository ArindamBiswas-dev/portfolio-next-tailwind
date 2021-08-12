import { FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJava,
  SiNodeDotJs,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from 'react-icons/si';
import SmallCard from './SmallCard';

function Skills() {
  return (
    <div className="flex flex-col w-full pt-4 pb-8">
      <h4 className="text-sm font-bold text-red-500 md:pl-2 uppercase pb-3">
        Skills
      </h4>
      <div className="max-w-3xl mx-auto text-lg grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full">
        <SmallCard
          icon={<FaReact className="h-16 w-10 text-blue-500" />}
          name="React Js"
          topic="Web Development"
        />
        <SmallCard
          icon={<SiJavascript className="h-16 w-10 text-yellow-400" />}
          name="Javascript"
          topic="Web Development"
        />
        <SmallCard
          icon={<SiHtml5 className="h-16 w-10 text-red-500" />}
          name="HTML"
          topic="Web Development"
        />
        <SmallCard
          icon={<SiCss3 className="h-16 w-10 text-blue-500" />}
          name="CSS"
          topic="Web Development"
        />
        <SmallCard
          icon={<SiNodeDotJs className="h-16 w-10 text-green-500" />}
          name="Node JS"
          topic="Web Development"
        />
        <SmallCard
          icon={<SiPostgresql className="h-16 w-10 text-blue-800" />}
          name="Postgresql"
          topic="Database"
        />
        <SmallCard
          icon={<SiMongodb className="h-16 w-10 text-green-400" />}
          name="Mongo DB"
          topic="Database"
        />
        <SmallCard
          icon={<SiGit className="h-16 w-10 text-red-600" />}
          name="Git"
          topic="Version Control"
        />
        <SmallCard
          icon={<SiJava className="h-16 w-10 text-yellow-800" />}
          name="Java"
          topic="OOPS and solving DSA"
        />
      </div>
    </div>
  );
}

export default Skills;
