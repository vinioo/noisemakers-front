import React, { useEffect, useState } from "react";

import api from "../../services/api";

import Genres from "../../defines/genres";

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
  PanelContent,
  Icon,
  IconContainer
} from "./styles";

import ImageTest from "../../assets/images/woman1.jpg";
import ImageTest2 from "../../assets/images/boy1.jpg";
import ImageTest3 from "../../assets/images/boy2.jpg";
import SingerIcon from "../../assets/icons/6-microphone 1.svg";
import AcousticIcon from "../../assets/icons/4-guitar 1.svg";
import GuitarIcon from "../../assets/icons/3-electric guitar 1.svg";
import CajonIcon from "../../assets/icons/1-cajon 1.svg";

export default function BandInfo({ match, history }) {
  const [bandInfo, setBandInfo] = useState({});
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const getBandInfo = async () => {
      const response = await api.get(`/band/${match.params.id}`);
      setBandInfo(response.data);
      getGenre(response.data.genre)
    };
    getBandInfo();
  }, []);

  const getGenre = genreId => {
    const genre = Genres.filter(genre => genre.id == genreId);
    setGenre(genre[0].name)
  };

  return (
    <ContainerFull>
      <Navbar history={history}></Navbar>
      <Container>
        <Panel src={bandInfo.bigImage}>
          <PanelContent>
            <Title>{bandInfo.name}</Title>
            <h6>{bandInfo.description}</h6>
            <p>Cidade: {bandInfo.city}</p>
            <p>Gênero: {genre}</p>
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
                  <h6>Carla Faria</h6>
                  <p>
                    Ao contrário do que se acredita, Lorem Ipsum não é
                    simplesmente um texto randômico. Com mais de 2000.
                  </p>
                  <IconContainer>
                    <p>Instrumentos:</p>
                    <Icon src={SingerIcon}></Icon>
                    <Icon src={CajonIcon}></Icon>
                  </IconContainer>
                </MemberInfo>
              </BandMember>
              <BandMember>
                <img src={ImageTest2} />
                <MemberInfo>
                  <h6>José Silva</h6>
                  <p>O melhor que você já viu na sua vida.</p>
                  <IconContainer>
                    <p>Instrumentos:</p>
                    <Icon src={GuitarIcon}></Icon>
                  </IconContainer>
                </MemberInfo>
              </BandMember>
              <BandMember>
                <img src={ImageTest3} />
                <MemberInfo>
                  <h6>Vinicius Oliveira</h6>
                  <p>O melhor que você já viu na sua vida.</p>
                  <IconContainer>
                    <p>Instrumentos:</p>
                    <Icon src={AcousticIcon}></Icon>
                  </IconContainer>
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
