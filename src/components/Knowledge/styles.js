import styled from "styled-components";
import media from "../../styles/media";

export const KnowledgeContainer = styled.div`
  width: 100%;
  display: grid;

  margin-top: 20px;
  ${media.phone`
  grid-auto-columns: auto;
  `}
  ${media.desktop`
  grid-auto-columns: auto;
  grid-auto-flow: column;
    `}
`;
