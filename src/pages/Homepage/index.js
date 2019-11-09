import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { ContainerFull, Container } from "../../style/global";
import {
  FirstBase,
  FirstItem,
  SecondItem,
  SecondHeader,
  SecondContent,
  SecondContentFirstItem,
  SecondContentSecondItem,
  ThirdHeader,
  ThirdContent,
  ThirdItem,
  FourthContent
} from "./styles";

import HomeImage from "../../assets/images/home.png";
import SecondImage from "../../assets/images/second.jpg";
import Singer1 from "../../assets/images/singer1.jpg";
import Singer2 from "../../assets/images/singer2.jpg";

export default function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <ContainerFull>
        <Container background="#F2F4F6" height={"auto"}>
          <FirstBase>
            <FirstItem>
              <h2>Seus dias tocando sozinho acabaram.</h2>
              <p>
                Cadastre-se no noisemakers e encontre millhares de pessoas com o
                mesmo objetivo: formar uma banda. Vem fazer barulho!
              </p>
              Button
            </FirstItem>
            <SecondItem>
              <img src={HomeImage} alt="Imagem home piano"></img>
            </SecondItem>
          </FirstBase>
        </Container>
      </ContainerFull>
      <ContainerFull
        clipRight={true}
        background="linear-gradient(132.49deg, #4B2DCC 42.99%, #1EE3CF 157.41%), #4B2DCC;"
        height={"auto"}
      >
        <Container>
          <SecondHeader>
            <h3>De músicos para músicos</h3>
            <h6>
              Nós ajudamos músicos a se encontrarem e juntos desbravarem novas
              fronteiras no mundo da música.
            </h6>
          </SecondHeader>
          <SecondContent>
            <SecondContentFirstItem>
              <img src={SecondImage}></img>
            </SecondContentFirstItem>
            <SecondContentSecondItem>
              <h3>The authorators</h3>
              <h6>
                A primeira banda formada utilizando a plataforma, os authorators
                esbanjam talento pelo Brasil a fora.
              </h6>
              Button
            </SecondContentSecondItem>
          </SecondContent>
        </Container>
      </ContainerFull>
      <ContainerFull clipRight={true} mt="-92">
        <Container>
          <ThirdHeader>
            <h3>Quem usou recomenda</h3>
          </ThirdHeader>
          <ThirdContent>
            <ThirdItem>
              <img src={Singer1}></img>
              <h5>
                "Sem comentários! Plataforma excelente! Recomendo Fortemente!"
              </h5>
              <p>- Vinicius Oliveira</p>
            </ThirdItem>
            <ThirdItem>
              <img src={Singer2}></img>
              <h5>
                "Lorem Ipsum é simplesmente uma simulação de texto da indústria"
              </h5>
              <p>- Vinicius</p>
            </ThirdItem>
            <ThirdItem>
              <img src={Singer2}></img>
              <h5>
                "Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica"
              </h5>
              <p>- Vinicius</p>
            </ThirdItem>
          </ThirdContent>
        </Container>
      </ContainerFull>
      <ContainerFull background="#1EE3CF">
        <FourthContent>
          <h3>O mundo está a sua espera</h3>
          <h5>
            Encontre milhões de pessoas juntas por um único obetivo agora! É
            grátis!
          </h5>
          button
        </FourthContent>
      </ContainerFull>
      <Footer></Footer>
    </div>
  );
}
