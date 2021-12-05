import styled from "styled-components";
import media from "../../styles/media";

export const LongDivider = styled.hr`
  border-top: 1px solid #c1c1c1;
  height: 1px;
  ${media.phone`
  width: 100%;
`}
  ${media.desktop`
  width: 105%;
`}
  padding: 0;
  margin: 1px;
`;
export const ShortDivider = styled.hr`
  border-top: 1px solid #c1c1c1;
  ${media.phone`
  width: 95%;
`}
  ${media.desktop`
  width: 100%;
`}
  height: 1px;
  margin: 2px;
`;

export const SolidContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;