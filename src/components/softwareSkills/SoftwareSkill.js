import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import {
  FaJava,
  FaDocker,
  FaAws,
  FaReact,
  FaPython
} from "react-icons/fa";

import { DiGo } from "react-icons/di";

import {
  SiSpringboot,
  SiSpring,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  // SiDynamodb,
  SiApachekafka,
  SiRabbitmq,
  SiRedis,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiMongodb,
  SiJenkins,
  SiKubernetes,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiOpenai,
  // SiLangchain,
} from "react-icons/si";

export const iconMap = {
  FaJava,
  DiGo,
  SiCplusplus,
  SiSpringboot,
  SiSpring,
  SiMysql,
  SiPostgresql,
  // SiDynamodb,
  SiApachekafka,
  SiRabbitmq,
  SiRedis,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiMongodb,
  SiJenkins,
  FaDocker,
  SiKubernetes,
  FaAws,
  FaReact,
  FaPython,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiOpenai,
  // SiLangchain,
};



export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            const IconComponent = iconMap[skill.iconKey];
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                {IconComponent ? (
                  <IconComponent size={40} color={skill.color} />
                ) : (
                  <span>?</span>
                )}
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
