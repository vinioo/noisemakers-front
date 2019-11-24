import React, { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import Logo from "../Logo";
import LightInput from "../Input/LightInput";
import SecondaryButton from "../Button/secondary";

import CloseIcon from "../../assets/icons/error.svg";

import {
  LoginModalBase,
  LoginModalContent,
  ModalLabel,
  CloseIconBase
} from "./styles";

const LoginModal = ({ isShowing, hide, type, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = message =>
    toast.error(message, {
      position: "top-bottom",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

  const handleLoginSubmit = async e => {
    try {
      e.preventDefault();

      const res = await api.post("login", { email, password });

      localStorage.setItem("userId", res.data.id);
      history.push("/panel");
    } catch (err) {
      notify("Email ou senha inválidos!");
    }
  };

  const handleSignupSubmit = async e => {
    try {
      e.preventDefault();

      const res = await api.post("signup", { email, password });
      localStorage.setItem("userId", res.data.id);
      history.push("/userInfo");
    } catch (err) {
      notify("Usuário já cadastrado!");
    }
  };

  const buttonText = type === "login" ? "Login" : "Cadastrar";
  const footerText =
    type === "login" ? (
      <p>
        Sem conta? <span>Registrar-se</span>
      </p>
    ) : (
      <p>
        Já possui conta? <span>Login</span>
      </p>
    );
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <LoginModalBase>
            <LoginModalContent>
              <Logo></Logo>
              <CloseIconBase src={CloseIcon} onClick={hide}></CloseIconBase>
              <LightInput
                placeholder="Email"
                required={true}
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></LightInput>
              <LightInput
                placeholder="Senha"
                type="password"
                required={true}
                onChange={e => setPassword(e.target.value)}
              ></LightInput>
              <SecondaryButton
                width="340px"
                onClick={
                  type === "login" ? handleLoginSubmit : handleSignupSubmit
                }
              >
                {buttonText}
              </SecondaryButton>
              <ModalLabel>{footerText}</ModalLabel>
            </LoginModalContent>
          </LoginModalBase>
        </>,
        document.body
      )
    : null;
};

export default LoginModal;
