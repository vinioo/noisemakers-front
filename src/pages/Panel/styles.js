import styled from "styled-components";
import { Link } from "react-router-dom";

export const PanelFirstBase = styled.div`
  h4 {
    margin-top: 56px;
    margin-bottom: 32px;
  }
  color: #042c4d;
`;

export const PanelFirstContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 72px;
`;

export const PanelLeftItem = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  img {
    width: 578px;
    height: 310px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const PanelRightItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%;
  h4 {
    margin: 0;
    :after {
      content: "";
      display: block;
      width: 25%;
      padding-top: 8px;
      border-bottom: 3.5px solid #2bd4c3;
    }
  }
`;

export const PanelSecondContent = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #042c4d;
  padding-bottom: 104px;
`;

export const PanelSecondLeftItem = styled.div`
  h5 {
    margin-bottom: 40px;
  }
  width: 45%;
`;

export const PanelSecondRightItem = styled.div`
  h5 {
    margin-bottom: 40px;
  }
  width: 45%;
`;

export const PanelSecondSquaresBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  p {
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
    margin-right: 8px;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const PanelSecondSquare = styled(Link)`
  width: 47%;
  height: 200px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => (props.src ? props.src : "black")});
  background-position: center;
  background-size: cover;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
    transition: all 0.2s ease-in-out;
  }
`;

export const PanelSecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #042c4d;
  h5 {
    padding-top: 16px;
    margin-bottom: 32px;
    :before {
      content: "";
      display: block;
      width: 10%;
      margin: 0 auto;
      margin-bottom: 24px;
      border-bottom: 3.5px solid #2bd4c3;
    }
  }
  button {
    margin-bottom: 88px;
  }
`;

export const BandImage = styled.img`
  border-radius: 6px;
`;
