import React, { useState } from "react";

import Skill from "../Skill";

import { SkillContainerBase } from "./styles";

export default function SkillContainer({ itens }) {
  const [chosen, setChosen] = useState();

  return (
    <SkillContainerBase>
      {itens.map(item => (
        <Skill
          icon={item.icon}
          key={item.id}
          id={item.id}
          alt={item.alt}
          active={item.id === chosen}
          onClick={() => setChosen(item.id)}
        >
          {item.name}
        </Skill>
      ))}
    </SkillContainerBase>
  );
}
