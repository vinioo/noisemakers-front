import styled from "styled-components";

export const UserInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #042c4d;
`;

export const LeftContent = styled.div`
  margin-top: 24px;
  width: 50%;
  padding: 24 24px;
`;

export const RightContent = styled.div`
  width: 50%;
  padding: 24px 24px;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  form {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      width: 100%;
    }
    input {
      margin: 8px 0px;
    }
  }
  button {
    margin-top: 8px;
  }
`;
