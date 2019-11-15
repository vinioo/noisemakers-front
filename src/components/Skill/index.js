import React from "react";

import { SkillBase, SkillIcon } from "./styles";

export default function Skill({ icon, children, onClick, active, id, alt }) {
  return (
    <SkillBase onClick={onClick} className={active ? "active" : ""}>
      <SkillIcon id={id} alt={alt} src={icon}></SkillIcon>
      <p>{children}</p>
    </SkillBase>
  );
}
