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
  justify-content: space-between;
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
  }

  > div > p {
    padding: 30% 0;
    text-align: center;
    background: #c1c1c1;
  }

  > h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  > p {
    font-size: 1rem;
    text-align: justify;
    padding: 1em;
    line-height: 1.5rem;
  }

  > div > a {
    text-decoration: none;
    color: white;
    background: #c1c1c1;
    border-radius: 5px;
    padding: 5px;
    width: 110px;
    float: left;

    &:hover {
      box-shadow: 0px 0px 10px 0px #c1c1c1;
      cursor: pointer;
    }
  }
`;

export const VideoContainer = styled.div`
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
`;

