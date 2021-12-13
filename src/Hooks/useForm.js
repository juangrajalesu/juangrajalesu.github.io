import { useRef } from "react";
import emailjs from "emailjs-com";

export const useForm = ({ handleClick }) => {
  const form = useRef();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yrqlvew",
        "template_z9cggzt",
        form.current,
        "user_nLXDuX67AXZpzs2nKdVKZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleClick();
  };

 

  return {
    form,
    handleSubmit,
  };
};
