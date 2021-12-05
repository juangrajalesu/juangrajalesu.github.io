import { useState, useEffect } from "react";
import { Burguer } from "../Burguer";
import {
  HeaderStyled,
  Li,
  LogoContent,
  LogoText,
  StyledLogo as Logo,
  Ul,
} from "./styles";

const MIN_WIDTH = 768;
const HEADER_LIMIT = 60;

export const Header = () => {
  const [isOnMobileSize, setIsOnMobileSize] = useState(false);
  const [showFixed, setShowFixed] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < MIN_WIDTH) {
      setIsOnMobileSize(true);
    } else {
      setIsOnMobileSize(false);
    }
    if (window.scrollY > HEADER_LIMIT) {
      setShowFixed(true);
    } else {
      setShowFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <HeaderStyled fixed={showFixed}>
      <LogoContent>
        <Logo />
        <LogoText>Mi Portafolio</LogoText>
      </LogoContent>

      <nav>
        {isOnMobileSize ? (
          <Burguer />
        ) : (
          <Ul>
            <Li>
              <a href='#AboutMe'>Sobre mi</a>
            </Li>
            <Li>
              <a href='#Projects'>Proyectos</a>
            </Li>
            <Li>
              <a href='#ContactMe'>Contáctame</a>
            </Li>
          </Ul>
        )}
      </nav>
    </HeaderStyled>
  );
};
