import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

import { toImage } from "../../util";

import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/Button/primary";
import CtaButton from "../../components/Button/cta";
import Footer from "../../components/Footer";

import { ContainerFull, Container } from "../../style/global";

import {
  PanelFirstBase,
  PanelFirstContent,
  PanelLeftItem,
  PanelRightItem,
  PanelSecondContent,
  PanelSecondLeftItem,
  PanelSecondRightItem,
  PanelSecondSquaresBase,
  PanelSecondSquare,
  PanelSecondInfo,
  LoaderContainer
} from "./styles";

import ImageTest from "../../assets/images/singer1.jpg";

export default function Panel() {
  const [users, setUsers] = useState([]);
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSampleUsers = async () => {
      setLoading(true);
      const response = await api.get("getAllUserInfoSample");
      setUsers(response.data, setLoading(false));
    };
    const getSampleBands = async () => {
      const response = await api.get("getAllBandInfoSample");
      setBands(response.data);
    };
    getSampleBands();
    getSampleUsers();
  }, []);

  const override = css`
    position: absolute;
    left: 50%;
    top: 40%;
  `;

  return (
    <>
      <BeatLoader
        css={override}
        sizeUnit={"px"}
        size={20}
        color={"#2BD4C3"}
        loading={loading}
      />

      <Navbar></Navbar>
      <ContainerFull>
        <Container>
          <PanelFirstBase>
            <h4>Recomendado para você</h4>
            <PanelFirstContent>
              <PanelLeftItem>
                <img src={ImageTest} alt="band image" />
              </PanelLeftItem>
              <PanelRightItem>
                <h4>The authorators</h4>
                <p>
                  É um fato conhecido de todos que um leitor se distrairá com o
                  conteúdo de texto legível de uma página quando estiver
                  examinando sua diagramação. A vantagem de usar Lorem Ipsum é
                  que ele tem uma distribuição normal de letras, ao contrário de
                  "Conteúdo aqui, conteúdo aqui"
                </p>
                <br></br>
                <PrimaryButton>Ver banda</PrimaryButton>
              </PanelRightItem>
            </PanelFirstContent>
          </PanelFirstBase>
        </Container>
      </ContainerFull>
      <ContainerFull boxShadow="0px 15px 10px -15px #111 ">
        <Container>
          <PanelSecondContent>
            <PanelSecondLeftItem>
              <h5>Descubra mais bandas</h5>
              <PanelSecondSquaresBase>
                {bands.map(band => (
                  <>
                    <PanelSecondSquare
                      to={`/bandinfo/${band.id}`}
                      src={toImage(band.image)}
                    />
                  </>
                ))}
                <p>Ver mais</p>
              </PanelSecondSquaresBase>
            </PanelSecondLeftItem>
            <PanelSecondRightItem>
              <h5>Encontre músicos</h5>
              <PanelSecondSquaresBase>
                {users.map(user => (
                  <>
                    <PanelSecondSquare src={toImage(user.picture)} />
                  </>
                ))}
                <p>Ver mais</p>
              </PanelSecondSquaresBase>
            </PanelSecondRightItem>
          </PanelSecondContent>
          <PanelSecondInfo>
            <h5>Não encontrou o que desejava? Crie a sua própria banda!</h5>
            <CtaButton>Criar banda</CtaButton>
          </PanelSecondInfo>
        </Container>
      </ContainerFull>
      <Footer />
    </>
  );
}
