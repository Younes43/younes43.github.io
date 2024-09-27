// SoftwareSkill.js

import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

// Import icons from react-icons
import {
  FaPython,
  FaJs,
  FaJava,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiApachespark,
  SiApache,
  SiOpencv,
  SiFastapi,
  SiExpress,
  SiCelery,
  SiPostman,
  SiMicrosoftazure,
  SiR,
  SiBootstrap,
  // SiNosql,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { VscServerProcess } from "react-icons/vsc";

const skillIconMap = {
  Python: <FaPython />,
  JavaScript: <FaJs />,
  "C++": <SiCplusplus />,
  SQL: <DiDatabase />,
  Docker: <FaDocker />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  AWS: <FaAws />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  TypeScript: <SiTypescript />,
  Java: <FaJava />,
  R: <SiR />,
  "Express.js": <SiExpress />,
  Bootstrap: <SiBootstrap />,
  FastAPI: <SiFastapi />,
  Celery: <SiCelery />,
  Postman: <SiPostman />,
  TensorFlow: <SiTensorflow />,
  PyTorch: <SiPytorch />,
  "scikit-learn": <SiScikitlearn />,
  "Spark": <SiApachespark />,
  "Hadoop": <SiApache />,
  OpenCV: <SiOpencv />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Git: <FaGitAlt />,
  // NoSQL: <SiNosql />,
  Azure: <SiMicrosoftazure />,
  Kubernetes: <SiKubernetes />,
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skill.skillName}>
                {skillIconMap[skill.skillName] || <VscServerProcess />}
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

