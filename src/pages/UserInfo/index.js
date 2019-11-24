import React, { useState } from "react";
import Instruments from "../../defines/instruments";
import { toBase64 } from "../../util";

import NavbarReturn from "../../components/NavbarReturn";

import { Container } from "../../style/global";

import SkillContainer from "../../components/SkillContainer";
import LightInput from "../../components/Input/LightInput";
import FileInput from "../../components/Input/FileInput";
import PrimaryButton from "../../components/Button/primary";

import {
  UserInfoContent,
  LeftContent,
  RightContent,
  FormContainer
} from "./styles";

import api from "../../services/api";
export default function UserInfo({ history }) {
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      let imageBase64 = "";
      if (image) {
        imageBase64 = await toBase64(image).then(res => res);
      }
      console.log(window.localStorage.getItem("userId"));
      const response = await api.post("updateUserInfo", {
        name: name,
        user_id: parseInt(window.localStorage.getItem("userId")),
        description: description,
        mainSkill: skill,
        picture: imageBase64,
        country: country,
        city: city,
        state: state
      });

      history.push("/panel");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavbarReturn></NavbarReturn>
      <Container>
        <UserInfoContent>
          <LeftContent>
            <h5>Escolha a sua habilidade principal</h5>
            <SkillContainer setSkill={setSkill} itens={Instruments}></SkillContainer>
          </LeftContent>
          <RightContent>
            <h5>Complete o seu cadastro</h5>
            <FormContainer>
              <form id="userInfoForm">
                <LightInput
                  placeholder="Nome"
                  onChange={e => setName(e.target.value)}
                ></LightInput>
                <LightInput
                  placeholder="Descrição"
                  onChange={e => setDescription(e.target.value)}
                ></LightInput>
                <LightInput
                  placeholder="País"
                  onChange={e => setCountry(e.target.value)}
                ></LightInput>
                <LightInput
                  placeholder="Cidade"
                  onChange={e => setCity(e.target.value)}
                ></LightInput>
                <LightInput
                  placeholder="Estado"
                  onChange={e => setState(e.target.value)}
                ></LightInput>
                <p>Imagem de perfil</p>
                <FileInput
                  onChange={e => setImage(e.target.files[0])}
                ></FileInput>
                <PrimaryButton onClick={handleSubmit}>Prosseguir</PrimaryButton>
              </form>
            </FormContainer>
          </RightContent>
        </UserInfoContent>
      </Container>
    </>
  );
}
