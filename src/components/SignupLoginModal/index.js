import React from "react";

import Logo from "../Logo";
import Input from "../Input";
import SecondaryButton from "../Button/secondary";

import { LoginModalBase, LoginModalContent, ModalLabel } from "./styles";

export default function LoginModal() {
  return (
    <LoginModalBase>
      <LoginModalContent>
        <Logo></Logo>
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
        <SecondaryButton width="340px">Login</SecondaryButton>
        <ModalLabel>
          <p>
            Sem conta? <span>Registrar-se</span>
          </p>
        </ModalLabel>
      </LoginModalContent>
    </LoginModalBase>
  );
}
