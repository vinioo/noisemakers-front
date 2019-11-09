import styled from "styled-components";

export const NavbarBase = styled.div`
  width: 100%;
  height: 82px;
  background: #fafafa;
  color: #042C4D;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LogoBase = styled.div`
  width: 22.33%;
`;
export const ListBase = styled.div`
  width: 61.33%;
  ul {
    display: flex;
    flex-direction: row;
    li {
      margin-right: 32px;
    }
  }
`;
export const ButtonsBase = styled.div`
  width: 26.33%;
  display: flex;
  justify-content: flex-end;
`;
