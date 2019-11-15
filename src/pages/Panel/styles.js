import styled from "styled-components";

export const PanelFirstBase = styled.div`
  h4 {
    margin-top: 56px;
    margin-bottom: 32px;
  }
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
  }
`;

export const PanelRightItem = styled.div`
  width: 40%;
  h4 {
    margin: 0;
  }
`;

export const PanelSecondContent = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fafafa;
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
export const PanelSecondSquare = styled.div`
  width: 47%;
  height: 200px;
  background: url(${props => (props.src ? props.src : "black")});
  background-position: center;
  background-size: cover;
  margin-bottom: 16px;
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
  color: #fafafa;
  h5 {
    margin-bottom: 32px;
  }
  button {
    margin-bottom: 88px;
  }
`;
