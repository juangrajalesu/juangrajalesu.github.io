import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const useForm = ({ handleClick }) => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message, name, email } = formValues;

    if (!message || !name || !email) {
      console.log("Please fill out all fields");
    } else {
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
    }
    handleClick();
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return {
    form,
    handleSubmit,
    handleChange,
  };
};
