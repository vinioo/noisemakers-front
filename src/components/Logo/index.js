import React from "react";
import { Link } from "react-router-dom";

import { LogoStyle } from "./styles";

export default function Logo() {
  return (
    <LogoStyle>
      <Link to="/">
        noise<span>makers</span>
      </Link>
    </LogoStyle>
  );
}
