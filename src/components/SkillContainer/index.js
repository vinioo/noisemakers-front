import React, { useState } from "react";

import Skill from "../Skill";

import { SkillContainerBase } from "./styles";

export default function SkillContainer({ itens, setSkill }) {
  const [chosen, setChosen] = useState();

  const handleChoose = (item) => {
    setChosen(item);
    setSkill(item);
  }

  return (
    <SkillContainerBase>
      {itens.map(item => (
        <Skill
          icon={item.icon}
          key={item.id}
          id={item.id}
          alt={item.alt}
          active={item.id === chosen}
          onClick={() => handleChoose(item.id)}
        >
          {item.name}
        </Skill>
      ))}
    </SkillContainerBase>
  );
}
