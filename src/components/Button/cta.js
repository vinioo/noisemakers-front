import React from "react";
import { Link } from "react-router-dom";

import { Cta } from "./styles";

export default function CtaButton(props) {
  return (
    <Link to={props.path}>
      <Cta>
        <p>{props.children}</p>
      </Cta>
    </Link>
  );
}
