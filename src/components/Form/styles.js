import styled from "styled-components";


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  max-width: 500px;


  & > * {
    margin: 0.5rem;
    width: 90%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  > textarea {
    height: 100px;
    resize: none;
  }
`;
