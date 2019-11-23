import React from "react";

import { ContainerFull, Container } from "../../style/global";

import LogoWhite from "../../components/Logo/LogoWhite";

import { FooterBase } from "./styles";

export default function Footer() {
  return (
    <ContainerFull background="#042C4D">
      <Container>
        <FooterBase>
          <LogoWhite></LogoWhite>
          <p>Made with by Vinicius</p>
        </FooterBase>
      </Container>
    </ContainerFull>
  );
}
