import React from "react";

import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/Button/primary";
import Footer from "../../components/Footer";

import { ContainerFull, Container } from "../../style/global";

import {
  Title,
  Panel,
  BandInfoContent,
  BandInfoLeftSide,
  BandInfoLeftSideContent,
  BandInfoRightSide,
  BandMember,
  MemberInfo
} from "./styles";

import ImageTest from "../../assets/images/singer1.jpg";

export default function BandInfo() {
  return (
    <ContainerFull>
      <Navbar></Navbar>
      <Container>
        <Title>The authorators</Title>
        <Panel></Panel>
        <BandInfoContent>
          <BandInfoLeftSide>
            <h5>Integrantes</h5>
            <BandInfoLeftSideContent>
              <BandMember>
                <img src={ImageTest} />
                <MemberInfo>
                  <h6>Vinicius Oliveira</h6>
                  <p>O melhor que você já viu na sua vida.</p>
                  icones legais
                </MemberInfo>
              </BandMember>
              <BandMember>
                <img src={ImageTest} />
                <MemberInfo>
                  <h6>Vinicius Oliveira</h6>
                  <p>O melhor que você já viu na sua vida.</p>
                  icones legais
                </MemberInfo>
              </BandMember>
              <BandMember>
                <img src={ImageTest} />
                <MemberInfo>
                  <h6>Vinicius Oliveira</h6>
                  <p>O melhor que você já viu na sua vida.</p>
                  icones legais
                </MemberInfo>
              </BandMember>
            </BandInfoLeftSideContent>
          </BandInfoLeftSide>
          <BandInfoRightSide>
            <h5> Deixe uma mensagem</h5>
            <textarea placeholder="Escreva seu texto aqui..."></textarea>
            <PrimaryButton>Enviar mensagem</PrimaryButton>
          </BandInfoRightSide>
        </BandInfoContent>
      </Container>
      <Footer></Footer>
    </ContainerFull>
  );
}
