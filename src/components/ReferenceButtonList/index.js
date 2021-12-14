import { ReferenceButton } from "../ReferenceButton";
import { StyledReferenceButtonList } from "./styles";

export const ReferenceButtonList = () =>
{
  return (
    <StyledReferenceButtonList>
      <ReferenceButton
        imgSrc='./images/GitHub.png'
        title='GitHub'
        link='https://github.com/juangrajalesu'
      />
      <ReferenceButton
        imgSrc='./images/LI.png'
        title='LinkedIn'
        link='https://www.linkedin.com/in/juan-manuel-grajales-urquijo-8aa78b225'
      />
    </StyledReferenceButtonList>
  );
};
