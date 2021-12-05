import React from "react";
import { Footer as Fo } from "./styles";
import { DiReact } from "react-icons/di";

export const Footer = () => {
  return (
    <Fo>
          <p>Desarrollado por Juan Manuel Grajales</p>
          <p>🔥</p>
          <p>Sitio hecho con React <DiReact style={
              {'vertical-align': '-0.125em'}
          }/> </p>
    </Fo>
  );
};
