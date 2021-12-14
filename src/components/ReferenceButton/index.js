import { ReferenceButtonStyles, Logo } from "./styles";

export const ReferenceButton = ({ imgSrc, title, link }) => {
  return (
    <ReferenceButtonStyles>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <Logo src={imgSrc} alt={title} />
      </a>
    </ReferenceButtonStyles>
  );
};
