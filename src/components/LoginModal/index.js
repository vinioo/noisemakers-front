import React, { useState } from "react";
import ReactDOM from "react-dom";
import api from "../../services/api";

import Logo from "../Logo";
import Input from "../Input";
import SecondaryButton from "../Button/secondary";

import { LoginModalBase, LoginModalContent, ModalLabel } from "./styles";

const LoginModal = ({ isShowing, hide, type, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await api.post("signup", { email, password });
      history.push("/panel");
    } catch (err) {
      // props.history.push("/");
      // TODO: React toast ereror
    }
  };

  const buttonText = type === "login" ? "Login" : "Cadastrar";
  const footerText =
    type === "login" ? (
      <p>
        Sem conta? <span>Registrar-se</span>
      </p>
    ) : (
      <p>
        Já possui conta? <span>Login</span>
      </p>
    );
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <LoginModalBase>
            <LoginModalContent>
              <Logo onClick={hide}></Logo>
              <Input
                placeholder="Email"
                required={true}
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></Input>
              <Input
                placeholder="Senha"
                type="password"
                required={true}
                onChange={e => setPassword(e.target.value)}
              ></Input>
              <SecondaryButton width="340px" onClick={handleSubmit}>
                {buttonText}
              </SecondaryButton>
              <ModalLabel>{footerText}</ModalLabel>
            </LoginModalContent>
          </LoginModalBase>
        </>,
        document.body
      )
    : null;
};

export default LoginModal;
