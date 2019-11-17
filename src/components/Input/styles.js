import styled from "styled-components";

export const InputCustom = styled.input`
  box-sizing: border-box;
  outline: none;
  border-radius: 50px;
  width: 340px;
  height: 55px;
  border: 3.5px solid #042c4d;
  padding: 0px 24px;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  ::placeholder {
    color: #335d80;
    font-weight: 400;
  }
`;

export const LightInputBase = styled.input`
  box-sizing: border-box;
  outline: none;
  border-radius: 50px;
  width: 340px;
  height: 55px;
  background: transparent;
  border: 1.5px solid #042c4d;
  padding: 0px 24px;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  ::placeholder {
    color: #335d80;
    font-weight: 400;
  }
`;

export const FileInputBase = styled.input`
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  color: #042c4d;
`;
