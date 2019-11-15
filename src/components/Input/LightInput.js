import React from "react";

import { LightInputBase } from "./styles";
export default function LightInput({ type, placeholder, required, onChange}) {
  return (
    <LightInputBase
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    ></LightInputBase>
  );
}
