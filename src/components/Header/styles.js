import styled, { css } from "styled-components";
import media from "../../styles/media";
import Logo from "../SVG/Logo";

export const HeaderStyled = styled.header`
  z-index: 1;
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 2px solid #c1c1c1;
  left: 0;
  right: 0;
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  border-radius: 40%;
  border: 1px solid #c1c1c1;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
`;

export const LogoText = styled.span`
  font-weight: bold;
  cursor: pointer;
  ${media.phone`
        font-size: 1rem;
    `}

  ${media.desktop`
        font-size: 1.5rem;
    `}
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  > a{
    color: black;
    text-decoration: none;
    &:hover{
      color: Gray;
    }
  }
`;
