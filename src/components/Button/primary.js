import React from "react";
import { Link } from "react-router-dom";

import { Primary } from "./styles";

export default function PrimaryButton(props) {
  return (
    <Link to={props.path}>
      <Primary>
        <p>{props.children}</p>
      </Primary>
    </Link>
  );
}