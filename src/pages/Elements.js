import styled from "styled-components";

export const Container = styled.div`
  margin: 2em 5em;

  @media screen and (max-width: 768px) {
    margin: 2em 2em;
  }
`;
export const Center = styled.div`
  display: flex;
  position: absolute;
  margin-top: 10vh;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 2em;
  color: #42aee9;
  font-weight: 700;
`;
export const Form = styled.form``;
export const Label = styled.label`
  font-size: 1.5em;
  color: #42aee9;
  display: block;
  font-weight: 600;
`;
export const Text = styled.input`
  width: 100%;
  font-size: 1.2em;
  display: block;
  border-radius: 10px;
  padding: 0.2rem;
  margin: 0.5rem 0;
  color: #2a2e32;
  border: none;
`;
export const Submit = styled.input`
  display: block;
  border-radius: 10px;
  font-size: 1em;
  padding: 0.2rem;
  margin: 1em auto;
  height: 2em;
  width: 100%;
  border: none;
  background-color: #42aee9;
  color: #2a2e32;
`;
export const Error = styled.p`
  color: red;
`;
