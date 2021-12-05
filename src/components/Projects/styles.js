import styled from "styled-components";


export const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  text-align: center;
  margin-top: 20px;
  justify-items: center;
`;

export const Background = styled.div`
  /* background: linear-gradient(180deg, #c1c1c1, #f5f5f5, #c1c1c1); */
  width: 100%;
  > h1 {
    text-align: center;
  }
  padding:20px 0;
`;