import styled from "styled-components";

export const LoginModalBase = styled.div`
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  min-width: 420px;
  height: 495px;
  min-height: 495px;
  background: #fafafa;
  border-radius: 6px;
`;

export const LoginModalContent = styled.div`
  text-align: center;
  align-items: center;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    margin-bottom: 48px;
  }
  input {
    margin-bottom: 32px;
  }
  button {
    margin-top: 16px;
    margin-bottom: 64px;
  }
`;

export const ModalLabel = styled.p`
  color: #042c4d;
  span {
    color: #6b48ff;
  }
`;
