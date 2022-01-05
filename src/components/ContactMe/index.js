import { EmailForm } from "../EmailForm";
import { Container, Mail } from "./styles";
import { Emoji } from "../Emoji";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactMe = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const nofitfy = () => toast.dark("El contacto fue enviado exitosamente 🥳");
  const handleContent = () => {
    setIsEmailSent(!isEmailSent);
    nofitfy();
  };

  return (
    <Container id='ContactMe'>
      {isEmailSent ? (
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          toastClassName={'dark-toast'}
        />
      ) : (
        <>
          <h1>Contáctame</h1>
          <p>
            Llena el siguiente formulario o envia un e-mail a
            <Mail href='mailto: juan.grajalesu@gmail.com'>
              {" "}
              mi correo <Emoji emoji='📧' />
            </Mail>
          </p>
          <EmailForm handleClick={handleContent} />
        </>
      )}
    </Container>
  );
};
