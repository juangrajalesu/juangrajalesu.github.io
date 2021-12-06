import styled from "styled-components";

export const Mail = styled.a`
  color: black;
  text-decoration: solid;
  padding-left: 3px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  /* background: linear-gradient(0deg,#f5f5f5, #c1c1c1); */

`;
