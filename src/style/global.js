import styled from "styled-components";

export const ContainerFull = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: ${props => (props.height ? props.height : "auto")};
  background: ${props => (props.background ? props.background : "#F2F4F6")};
  clip-path: ${props =>
    props.clipLeft && "polygon(0 0, 100% 2vw, 100% 100%, 0 100%)"};
  clip-path: ${props =>
    props.clipRight && "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)"};
  margin-top: ${props => props.mt && `${props.mt}px`};
`;
export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: ${props => (props.height ? props.height : "100%")};
  background: ${props => (props.background ? props.background : "transparent")};
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
