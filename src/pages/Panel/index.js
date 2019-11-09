import React from "react";

import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/Button/primary";

import { ContainerFull, Container } from "../../style/global";

import {
  PanelFirstBase,
  PanelFirstContent,
  PanelLeftItem,
  PanelRightItem
} from "./styles";

import ImageTest from "../../assets/images/singer1.jpg";

export default function Panel() {
  return (
    <>
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
      <ContainerFull>
          
      </ContainerFull>
    </>
  );
}
