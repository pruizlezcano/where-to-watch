import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  vertical-align: middle;
`;

export const Label = styled.label`
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  width: 20%;
  height: 2.5em;
  border: 0;
  border-radius: 0.3em;
  padding: 0 1em;
  border-radius: 9px;
  font-size: 1em;
  @media screen and (max-width: 1000px) {
    width: 30%;
  }
`;

export const Button = styled.button`
  border: 0;
  width: 6%;
  height: 2.5em;
  text-align: center;
  vertical-align: middle;
  border-radius: 9px;
  font-size: 1em;
  @media screen and (max-width: 1000px) {
    width: 10%;
  }
`;

export const Results = styled.div`
  width: 100%;
  margin-top: 2em;
`;
