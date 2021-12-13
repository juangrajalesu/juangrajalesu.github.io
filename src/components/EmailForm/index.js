import { StyledForm } from "./styles";
import { useForm } from "../../Hooks/useForm";

export const EmailForm = (handleClick) => {
  const { form, handleSubmit } = useForm(handleClick);

  return (
    <StyledForm ref={form} onSubmit={handleSubmit} method='post'>
      <label>Introduce tu nombre *</label>
      <input
        type='text'
        name='name'
        placeholder='Introduce tu nombre'
        required
      />
      <label>Introduce tu correo *</label>
      <input
        type='email'
        name='email'
        placeholder='Introduce tu correo'
        required
      />
      <label>Envíame un mensaje *</label>
      <textarea name='message' placeholder='Introduce tu mensaje' required />
      <button type='submit' value='Send'>
        Enviar
      </button>
    </StyledForm>
  );
};
