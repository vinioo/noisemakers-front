import React from "react";

import { FileInputBase } from "./styles";

export default function FileInput({ onChange }) {
  return <FileInputBase type="file" onChange={onChange}></FileInputBase>;
}
