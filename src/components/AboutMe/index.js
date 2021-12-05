import { AboutMeContainer, Avatar, Background, Description, Phrase } from "./styles";
import { Emoji } from "../Emoji";

export const AboutMe = () => {
  return (
    <Background id='AboutMe'>
      <AboutMeContainer>
        <Avatar>
          <img src='images/Avatar.jpeg' alt='profile' draggable='false' />
        </Avatar>

        <Description>
          <h1>¡Hola! ,</h1>
          <h2>Soy Juan Manuel Grajales</h2>
          <h2>
            Junior Front end Developer situado en Colombia{" "}
            <Emoji emoji='🧑🏻‍💻' />
          </h2>
        </Description>
      </AboutMeContainer>
      <Phrase>Codificando tus ideas.</Phrase>
    </Background>
  );
};
