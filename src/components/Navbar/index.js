import React, { useState } from "react";

import useModal from "../../hooks/useModal";

import Logo from "../../components/Logo";
import PrimaryButton from "../../components/Button/primary";
import LoginModal from "../LoginModal";

import { Container } from "../../style/global";
import {
  NavbarBase,
  NavbarContent,
  LogoBase,
  ListBase,
  ButtonsBase,
  UserContainer,
  UserImage,
  UserInfo,
  UserAlert
} from "./styles";

export default function Navbar({ history }) {
  const [type, setType] = useState("");
  const { isShowing, toggle } = useModal();

  const handleLogin = () => {
    setType("login");
    toggle();
  };

  const handleSignup = () => {
    setType("signup");
    toggle();
  };

  return (
    <>
      <LoginModal
        isShowing={isShowing}
        hide={toggle}
        type={type}
        history={history}
      ></LoginModal>
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
              {window.localStorage.getItem("userId") > 0 ? (
                <UserContainer>
                  <UserInfo> Vinicius Oliveira</UserInfo>
                  <UserAlert></UserAlert>
                  <UserImage />
                </UserContainer>
              ) : (
                <>
                  <p onClick={handleLogin}>Entrar</p>
                  <PrimaryButton onClick={handleSignup}>
                    Cadastrar
                  </PrimaryButton>
                </>
              )}
            </ButtonsBase>
          </NavbarContent>
        </Container>
      </NavbarBase>
    </>
  );
}
