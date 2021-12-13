import { StyledForm } from "./styles";
import { useRef } from "react";
import emailjs from "emailjs-com";
require ("dotenv").config();

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
      // .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID)
      emailjs.sendForm('service_yrqlvew','template_z9cggzt', form.current, 'user_nLXDuX67AXZpzs2nKdVKZ')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <label>Introduce tu nombre *</label>
      <input type='text' name='name' placeholder='Introduce tu nombre' />
      <label>Introduce tu correo *</label>
      <input type='email' name='email' placeholder='Introduce tu correo' />
      <label>Envíame un mensaje *</label>
      <textarea name='message' placeholder='Introduce tu mensaje'></textarea>
      <button type='submit' value="Send">Enviar</button>
    </StyledForm>
  );
};
