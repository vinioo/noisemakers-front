import React from "react";

import Logo from "../../components/Logo";
import PrimaryButton from "../../components/Button/primary";

import { Container } from "../../style/global";
import {
  NavbarBase,
  NavbarContent,
  LogoBase,
  ListBase,
  ButtonsBase
} from "./styles";

export default function Navbar() {
  return (
    <NavbarBase>
      <Container>
        <NavbarContent>
          <LogoBase>
            <Logo></Logo>
          </LogoBase>
          <ListBase>
            <ul>
              <li>Home</li>
              <li>Como participar</li>
              <li>Ajuda</li>
            </ul>
          </ListBase>
          <ButtonsBase>
            <p>Entrar</p>
            <PrimaryButton>Cadastrar</PrimaryButton>
          </ButtonsBase>
        </NavbarContent>
      </Container>
    </NavbarBase>
  );
}
