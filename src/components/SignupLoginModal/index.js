import React, { useState } from "react";
import api from "../../services/api";

import Logo from "../Logo";
import Input from "../Input";
import SecondaryButton from "../Button/secondary";

import { LoginModalBase, LoginModalContent, ModalLabel } from "./styles";

export default function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await api.post("signup", { email, password });
      props.history.push("/panel");
    } catch (err) {
      // props.history.push("/");
      // TODO: React toast ereror
    }
  };

  let buttonText = props.login ? "Login" : "Cadastrar";
  let footerText = props.login ? (
    <p>
      Sem conta? <span>Registrar-se</span>
    </p>
  ) : (
    <p>
      Já possui conta? <span>Login</span>
    </p>
  );
  return (
    <LoginModalBase>
      <LoginModalContent>
        <Logo></Logo>
        <Input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        ></Input>
        <SecondaryButton width="340px" onClick={handleSubmit}>
          {buttonText}
        </SecondaryButton>
        <ModalLabel>{footerText}</ModalLabel>
      </LoginModalContent>
    </LoginModalBase>
  );
}
