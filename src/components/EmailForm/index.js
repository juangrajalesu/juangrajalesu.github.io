import { StyledForm } from "./styles";
import { useForm } from "../../Hooks/useForm";

export const EmailForm = (handleClick) => {
  const { form, handleSubmit, handleChange } = useForm(handleClick);
  

  return (
    <StyledForm ref={form} onSubmit={handleSubmit}>
      <label>Introduce tu nombre *</label>
      <input
        type='text'
        name='name'
        placeholder='Introduce tu nombre'
        onChange={handleChange}
      />
      <label>Introduce tu correo *</label>
      <input
        type='email'
        name='email'
        placeholder='Introduce tu correo'
        onChange={handleChange}
      />
      <label>Envíame un mensaje *</label>
      <textarea
        name='message'
        placeholder='Introduce tu mensaje'
        onChange={handleChange}
      />
      <button type='submit' value='Send'>
        Enviar
      </button>
    </StyledForm>
  );
};
