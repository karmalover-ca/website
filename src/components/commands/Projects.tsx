import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Don't care about anything but code?" I got you. <br />
        Here are some of my favorite projects
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Lake Effect Robotics 2023 Robot",
    desc: "The robot and code for the 2023 CHARGED UP First Robotics Competition.",
    url: "https://github.com/LakeEffectRobotics/LER-2023",
  },
  {
    id: 2,
    title: "Discord CrossChat Bot",
    desc: "A simple Discord bot to enable server-to-server chatting in a single channel.",
    url: "https://github.com/karmalover-ca/CrossChat",
  },
  {
    id: 3,
    title: "Personal Website",
    desc: "A personal website for showing my socials and interests, forked from satnaing/terminal-portfolio.",
    url: "https://github.com/karmalover-ca/website",
  },
  {
    id: 4,
    title: "Assist IT LLP",
    desc: "A IT support and server hosting company, I've lending my backend expertise to.",
    url: "https://assistit.org",
  },
];

export default Projects;
