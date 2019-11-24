import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../components/Logo";

import { Container } from "../../style/global";
import {
  NavbarBase,
  NavbarContent,
  LogoBase,
  ListBase,
  ButtonsBase,
  ReturnIconBase
} from "./styles";

import ReturnIcon from "../../assets/icons/return-arrow.svg";

export default function Navbar({ history }) {
  return (
    <>
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
              <Link to="/">
                <ReturnIconBase src={ReturnIcon}></ReturnIconBase>
              </Link>
            </ButtonsBase>
          </NavbarContent>
        </Container>
      </NavbarBase>
    </>
  );
}
