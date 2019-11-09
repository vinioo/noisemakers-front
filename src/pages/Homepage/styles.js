import styled from "styled-components";

export const FirstBase = styled.div`
  display: flex;
  flex-direction: row;
  padding: 56px 0;
`;
export const FirstItem = styled.div`
  width: 50%;
  height: 100%;
  color: #042c4d;
  h2 {
    margin-top: 42px;
    margin-bottom: 32px;
  }
  div {
    width: 500px;
    margin-bottom: 48px;
  }
`;

export const SecondItem = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 95%;
    height: 95%;
    justify-self: flex-end;
  }
`;

export const SecondHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 120px 0;
  h3 {
    margin-bottom: 32px;
    font-weight: 400 !important;
    color: #fafafa;
  }
  h6 {
    margin: 0 auto;
    width: 500px;
    text-align: center;
    color: #e2e4e5;
  }
`;

export const SecondContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 120px;
`;
export const SecondContentFirstItem = styled.div`
  width: 60%;
  img {
    width: 82%;
    height: 82%;
  }
`;

export const SecondContentSecondItem = styled.div`
  width: 40%;
  h3 {
    font-weight: 400;
    color: #fafafa;
    margin-bottom: 32px;
  }
  h6 {
    color: #e2e4e5;
    margin-bottom: 96px;
  }
  button {
    margin: 8px;
  }
`;

export const ThirdHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px;
  color: #042c4d;
`;

export const ThirdContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #042c4d;
  padding-bottom: 120px;
`;
export const ThirdItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  height: auto;
  min-height: 300px;
  img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    margin-bottom: 32px;
  }
  h5 {
    width: 320px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 32px;
    font-style: italic;
  }
  p {
    font-weight: 400;
  }
`;

export const FourthContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 500px;
  color: #042c4d;
  h3 {
    margin-bottom: 16px;
  }
  h5 {
    margin-bottom: 80px;
  }
`;
