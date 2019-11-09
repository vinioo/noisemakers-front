import styled from "styled-components";

export const ContainerFull = styled.div`
  width: 100%;
  max-width: 1920px;
  height: ${props => (props.height ? props.height : "auto")};
  background: ${props => (props.background ? props.background : "#F2F4F6")};
`;
export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  @media (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 750px;
  }
  @media (min-width: 992px) {
    padding-right: 15px;
    padding-left: 15px;
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;


