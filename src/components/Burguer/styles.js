import styled from "styled-components";
import {
  lateralMoveAnimation,
  lateralMoveBackAnimation,
} from "../../styles/animations";
import { AiOutlineMenu } from "react-icons/ai";

export const Container = styled.div`
  padding: 0 15px;
`;

export const SideBar = styled.ul`
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  left: 66%;
  padding-left: 10px;
  width: 40%;
  height: 100%;
  position: fixed;
  border-left: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
  border-radius: 0 0 10px 10px;
  ${lateralMoveAnimation}
  &.back {
    ${lateralMoveBackAnimation}
  }

  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid #c1c1c1;
  font-weight: bold;
  cursor: pointer;
`;

export const SideBarIcon = styled(AiOutlineMenu)`
  font-size: 25px;
  border-radius: 50%;
`;
