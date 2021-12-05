import { StyledForm } from "./styles";

export const Formulario = () => {
  return (
      <StyledForm action=''>
        <label>Introduce tu nombre *</label>
        <input type='text' name='Nombre' placeholder='Introduce tu nombre' />
        <label>Introduce tu correo *</label>
        <input type='email' name='email' placeholder='Introduce tu correo' />
        <label>Envíame un mensaje *</label>
        <textarea name='mensaje' placeholder='Introduce tu mensaje'></textarea>
        <input type='submit' value='Enviar' />
      </StyledForm>
  );
};
