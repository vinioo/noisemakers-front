import React, { useState } from "react";
import Genres from "../../defines/genres";

import { toBase64, notify } from "../../util";

import Navbar from "../../components/Navbar";

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
export default function NewBand({ history }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState(0);
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [skill, setSkill] = useState("");


  const handleSubmit = async e => {
    try {
      e.preventDefault();
      let imageBase64 = "";
      let bannerBase64 = "";
      if (image) {
        imageBase64 = await toBase64(image).then(res => res);
      }
      if (banner) {
        bannerBase64 = await toBase64(banner).then(res => res);
      }
      console.log(city);
      const response = await api.post("band", {
        userId: window.localStorage.getItem("userId") || 1,
        name: name,
        genre: skill,
        city: city,
        qttyMembers: members,
        description: description,
        image: imageBase64,
        bigImage: bannerBase64
      });

      history.push("/panel");
    } catch (err) {
      notify("Verifique os campos do formulário!")
    }
  };

  return (
    <>
      <Navbar history={history}></Navbar>
      <Container>
        <UserInfoContent>
          <LeftContent>
            <h5>Escolha o gênero da banda</h5>
            <SkillContainer setSkill={setSkill} itens={Genres}></SkillContainer>
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
                  placeholder="Quantidade de membros"
                  onChange={e => setMembers(e.target.value)}
                ></LightInput>

                <LightInput
                  placeholder="Cidade"
                  onChange={e => setCity(e.target.value)}
                ></LightInput>
                <LightInput
                  placeholder="Descrição"
                  onChange={e => setDescription(e.target.value)}
                ></LightInput>
                <p>Imagem de perfil</p>
                <FileInput
                  onChange={e => setImage(e.target.files[0])}
                ></FileInput>
                <p>Banner do perfil</p>
                <FileInput
                  onChange={e => setBanner(e.target.files[0])}
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
