import { ButtonContainer, ItemContainer, VideoContainer } from "./styles";

const Item = ({ Link, videoSrc, generalDescription, Name }) => {
  return (
    <ItemContainer>
      

      <VideoContainer>
        {videoSrc ? (
          <video src={videoSrc} autoPlay loop muted />
        ) : (
          <p>Video no disponible</p>
        )}
      </VideoContainer>

      <h1>{Name || "sin nombre"}</h1>

      <p>{generalDescription || "sin descripcion"}</p>
      {Link && (
        <ButtonContainer>
          <a href={Link} target='_blank' rel='noopener noreferrer'>
            Ver en Github
          </a>
        </ButtonContainer>
      )}
    </ItemContainer>
  );
};

export default Item;
