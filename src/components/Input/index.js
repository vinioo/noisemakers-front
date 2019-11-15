import React from "react";

import { InputCustom } from "./styles";

export default function Input({ placeholder, type, onChange, required }) {
  return (
    <InputCustom
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    ></InputCustom>
  );
}
