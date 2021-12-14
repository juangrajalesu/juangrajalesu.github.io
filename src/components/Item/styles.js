import styled from "styled-components";
import media from "../../styles/media";

export const ItemContainer = styled.div`
  padding: 10px;
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
  position: relative;
  display: flex;
  flex-direction: column;
  ${media.phone`
    width: 100%;
    height: auto;
  `}
  ${media.desktop`
  max-width: 300px;
  height: 510px;
  `}

  > div > video {
    width: 100%;
    height: 100%;
    background-color: black;
  }

  > div > p {
    padding: 30% 0;
    text-align: center;
    background: #c1c1c1;
  }

  > h1 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 10px;
    padding: 10px 0;
  }

  > p {
    font-size: 1rem;
    text-align: justify;
    padding: 0.8em;
    padding-top: 20px;
    line-height: 1.5rem;
  }

  > div > a {
    text-decoration: none;
    color: white;
    background: #c1c1c1;
    border-radius: 5px;
    padding: 5px;
    width: 110px;
    
    
    ${media.phone`
    float: left;
  `}
  ${media.desktop`
  position: absolute;
    bottom: 10px;
    left: 10px;
  `}
    

    &:hover {
      box-shadow: 0px 0px 10px 0px #c1c1c1;
      cursor: pointer;
    }
  }
`;

export const VideoContainer = styled.div`
  object-fit: contain;
  ${media.phone`
    width: 100%;
  `}
  ${media.desktop`
  width: 300px;
  height: 190px;
  `}
  
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
`;

