import React, { useState } from "react";

import Logo from "../../components/Logo";
import PrimaryButton from "../../components/Button/primary";
import SignupLoginModal from "../../components/SignupLoginModal";

import { Container } from "../../style/global";
import {
  NavbarBase,
  NavbarContent,
  LogoBase,
  ListBase,
  ButtonsBase
} from "./styles";

export default function Navbar({ history }) {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleVibile = () => setVisible(true);

  const handleSignIn = () => {
    setSignUp({ signUp: false });
    setSignIn({ signIn: true });
    handleVibile();
  };
  const handleSignUp = e => {
    setSignUp({ signUp: true });
    setSignIn({ signIn: false });
    handleVibile();
  };
  let LoginModal;

  // if (signIn) {
  //   LoginModal = <SignupLoginModal login />;
  // } else {
  //   LoginModal = <SignupLoginModal signUp />;
  // }
  LoginModal = <SignupLoginModal signUp history={history} />;
  return (
    <>
      {visible && LoginModal}
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
              <p onClick={handleSignIn}>Entrar</p>
              <PrimaryButton onClick={handleSignUp}>Cadastrar</PrimaryButton>
            </ButtonsBase>
          </NavbarContent>
        </Container>
      </NavbarBase>
    </>
  );
}
