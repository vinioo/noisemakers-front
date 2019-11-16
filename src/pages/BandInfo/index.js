import React, { useEffect, useState } from "react";

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
  MemberInfo,
  PanelContent
} from "./styles";

import ImageTest from "../../assets/images/singer1.jpg";
import api from "../../services/api";
import SecondaryButton from "../../components/Button/secondary";
import CtaButton from "../../components/Button/cta";

export default function BandInfo({ match }) {
  const [bandInfo, setBandInfo] = useState({});
  useEffect(() => {
    const getBandInfo = async () => {
      const response = await api.get(`/band/${match.params.id}`);
      setBandInfo(response.data);
    };
    getBandInfo();
  }, []);
  console.log(bandInfo);
  return (
    <ContainerFull>
      <Navbar></Navbar>
      <Container>
        <Panel src={bandInfo.bigImage}>
          <PanelContent>
            <Title>{bandInfo.name}</Title>
            <h6>{bandInfo.description}</h6> 
            <p>Cidade: {bandInfo.city}</p>
            <p>Gênero: {bandInfo.genre}</p>
            <p>Membros:{bandInfo.qttyMembers}</p>
          </PanelContent>
        </Panel>
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
