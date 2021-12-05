import { Background } from "../Projects/styles";
import Item from "../Item";
import projectsList from "./Projects.json";
import { ProjectContainer } from "./styles";

export const Projects = () => {
  return (
    <Background id='Projects'>
      <h1>Proyectos</h1>
      <ProjectContainer>
        {Object.keys(projectsList).map((key) => (
          <Item
            key={key}
            videoSrc={projectsList[key].videoSrc}
            Link={projectsList[key].Link}
            generalDescription={projectsList[key].generalDescription}
            Name={projectsList[key].Name}
          />
        ))}
      </ProjectContainer>
    </Background>
  );
};
