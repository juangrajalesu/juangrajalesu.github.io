import { Formulario } from "../Form";
import { Container, Mail } from "./styles";
import { Emoji } from "../Emoji";

export const ContactMe = () => {
  return (
    <Container id='ContactMe'>
      <h1>Contáctame</h1>
      <p>
        Llena el siguiente formulario o envia un e-mail a
        <Mail href='mailto: juan.grajalesu@udea.edu.co'>
          {" "}
          mi correo <Emoji emoji='📧' />
        </Mail>
      </p>
      <Formulario />
    </Container>
  );
};
