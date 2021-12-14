import styled from "styled-components";

export const ReferenceButtonStyles = styled.div`
  display: inline-block;
  width: 100px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding:  0 10px;
  
  >a{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
  }
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
