import styled from "styled-components";

export const NavbarBase = styled.div`
  width: 100%;
  height: 82px;
  background: #fafafa;
  color: #042c4d;
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
      cursor: pointer;
    }
  }
`;
export const ButtonsBase = styled.div`
  width: 26.33%;
  display: flex;
  justify-content: flex-end;
  p {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  button {
    margin-left: 32px;
  }
`;

export const UserContainer = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  margin-left: 16px;
  background: url(${props => props.image && props.image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all ease-in-out .2s;
  }
`;

export const UserInfo = styled.p`
  color: #042c4d;
`;

export const UserAlert = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all ease-in-out .2s;
  }
`;
