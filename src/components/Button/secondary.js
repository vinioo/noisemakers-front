import React from "react";
import { Link } from "react-router-dom";

import { Secondary } from "./styles";

export default function SecondaryButton(props) {
  return (
    <Link to={props.path}>
      <Secondary>
        <p>{props.children}</p>
      </Secondary>
    </Link>
  );
}
