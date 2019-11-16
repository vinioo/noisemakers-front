import styled from "styled-components";

export const Title = styled.h4`
  margin-bottom: 8px;
  :after {
    content: "";
    display: block;
    width: 50%;
    padding-top: 8px;
    border-bottom: 3.5px solid #2bd4c3;
  }
`;

export const Panel = styled.div`
  width: 100%;
  height: 310px;
  background: linear-gradient(
      122deg,
      rgba(51, 51, 51, 1) 22%,
      rgba(0, 0, 0, 0) 54%
    ),
    url(${props => (props.src ? props.src : "black")});
  background-size: cover;
  background-position: center;
  padding: 16px 32px;
  box-sizing: border-box;
`;

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 380px;
  color: #F2F4F6;
  h6 {
    margin-bottom: 16px;
  }
`;

export const BandInfoContent = styled.div`
  padding: 80px 0px;

  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const BandInfoLeftSide = styled.div`
  h5 {
    margin-bottom: 40px;
  }
  width: 55%;
`;

export const BandInfoLeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const BandMember = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  img {
    width: 30%;
    height: 100px;
  }
`;

export const MemberInfo = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BandInfoRightSide = styled.div`
  h5 {
    margin-bottom: 40px;
    text-align: left;
  }
  width: 45%;
  display: flex;
  flex-direction: column;
  text-align: right;
  textarea {
    height: 120px;
    margin-bottom: 32px;
  }
`;
