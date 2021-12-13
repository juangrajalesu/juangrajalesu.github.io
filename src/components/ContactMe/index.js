import { EmailForm } from "../EmailForm";
import { Container, Mail } from "./styles";
import { Emoji } from "../Emoji";
import { useState} from "react";

export const ContactMe = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const handleContent = () => {
    setIsEmailSent(!isEmailSent);
  };
  
  return (
    <Container id='ContactMe'>
      <h1>Contáctame</h1>
      <p>
        Llena el siguiente formulario o envia un e-mail a
        <Mail href='mailto: juan.grajalesu@gmail.com'>
          {" "}
          mi correo <Emoji emoji='📧' />
        </Mail>
      </p>
      {isEmailSent ? (
        <p>El contacto fue enviado exitosamente </p>
      ) : (
        <EmailForm handleClick={handleContent}/>
      )}
    </Container>
  );
};
