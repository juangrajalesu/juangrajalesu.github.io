import styled from "styled-components";
import media from "../../styles/media";

export const Avatar = styled.div`
  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  ${media.phone`
  width: 100%;
  `}
  ${media.desktop`
  width: 50%;
  `}
  text-align: center;
`;

export const AboutMeContainer = styled.div`
  padding: 30px 20px;
  width: 100%;
  ${media.phone`
  display:block;
  `}
  ${media.desktop`
  display:flex;
  `}
  margin: 4rem 0;
`;

export const Description = styled.div`
  width: 249px;
  > h1,
  h2 {
    margin: 0;
    text-align: left;
  }
  ${media.phone`
  margin: 10%;
  `}
  ${media.desktop`
  margin: 0 10%;
  `}
`;

export const Phrase = styled.p`
  font-size: 20px;
  font-weight: lighter;
  line-height: 1.5;
  padding-bottom: 20px;
  text-align: center;
`;

export const Background = styled.div`
  width: 100%;
`;


