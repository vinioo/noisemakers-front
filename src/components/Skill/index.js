import React from "react";

import { SkillBase, SkillIcon } from "./styles";

export default function Skill({ icon, children }) {
  return (
    <SkillBase>
      <SkillIcon alt="Icon" src={icon}></SkillIcon>
      <p>{children}</p>
    </SkillBase>
  );
}
