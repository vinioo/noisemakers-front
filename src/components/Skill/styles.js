import styled from "styled-components";

export const SkillBase = styled.div`
  background: #e2e4e5;
  border-radius: 20px;
  width: 130px;
  height: 115px;
  margin-bottom: 8px;
  color: #042c4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #61f2e3;
  }
`;

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
`;
