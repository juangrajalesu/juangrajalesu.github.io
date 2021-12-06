/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Container, SideBar, SideBarIcon, SideBarItem } from "./styles";
export const Burguer = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSideBar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open === false) {
      setTimeout(() => {
        setVisible(false);
      }, 500);
    } else {
      setVisible(true);
    }
  }, [open]);

  return (
    <>
      <Container onClick={handleSideBar}>
        {!open && <SideBarIcon />}
        <SideBar
          isOpen={open}
          isVisible={visible}
          className={open ? " " : " back"}>
          <SideBarItem>
            <a href='#AboutMe'>Sobre mi</a>
          </SideBarItem>
          <SideBarItem>
            <a href='#Projects'>Proyectos</a>
          </SideBarItem>
          <SideBarItem>
            <a href='#ContactMe'>Contáctame</a>
          </SideBarItem>
        </SideBar>
      </Container>
    </>
  );
};
