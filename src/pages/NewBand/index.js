import React from "react";

import Navbar from "../../components/Navbar";

import { Container } from "../../style/global";

import Skill from "../../components/Skill";
import LightInput from "../../components/Input/LightInput";
import FileInput from "../../components/Input/FileInput";
import PrimaryButton from "../../components/Button/primary";

import {
  UserInfoContent,
  LeftContent,
  RightContent,
  SkillContainer,
  FormContainer
} from "./styles";

import Icon1 from "../../assets/icons/007-cajon 1.svg";
import Icon2 from "../../assets/icons/016-drum set 1.svg";
import Icon3 from "../../assets/icons/019-electric guitar 1.svg";
import Icon4 from "../../assets/icons/026-guitar 1.svg";
import Icon5 from "../../assets/icons/035-microphone 1.svg";
export default function UserInfo() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <UserInfoContent>
          <LeftContent>
            <h5>Escolha o gênero da banda</h5>
            <SkillContainer>
              <Skill icon={Icon1}>Guitarra</Skill>
              <Skill icon={Icon2}>Violão</Skill>
              <Skill icon={Icon3}></Skill>
              <Skill icon={Icon5}></Skill>
              <Skill icon={Icon4}></Skill>
              <Skill icon={Icon3}></Skill>
              <Skill icon={Icon5}></Skill>
              <Skill icon={Icon4}></Skill>
            </SkillContainer>
          </LeftContent>
          <RightContent>
            <h5>Complete o cadastro</h5>
            <FormContainer>
              <form>
                <LightInput placeholder="Nome"></LightInput>
                <LightInput placeholder="Quantidade de membros"></LightInput>
                <LightInput placeholder="País"></LightInput>
                <LightInput placeholder="Cidade"></LightInput>
                <LightInput placeholder="Estado"></LightInput>
                <p>Imagem de perfil</p>
                <FileInput></FileInput>
              </form>
              <PrimaryButton>Prosseguir</PrimaryButton>
            </FormContainer>
          </RightContent>
        </UserInfoContent>
      </Container>
    </>
  );
}
