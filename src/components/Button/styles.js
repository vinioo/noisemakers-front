import styled from "styled-components";

export const Primary = styled.button`
  outline: none;
  border: none;
  background: #2bd4c3;
  width: ${props => (props.width ? props.width : "210px")};
  height: 50px;
  border-radius: 40px;
  cursor: pointer;
  p {
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fffafa;
    font-weight: 600;
  }
  &:hover {
    background: #26bfb0;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Secondary = styled.button`
  outline: none;
  border: none;
  background: #0d3f67;
  width: ${props => (props.width ? props.width : "210px")};
  height: 50px;
  border-radius: 40px;
  cursor: pointer;
  p {
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    font-weight: 600;
  }
  &:hover {
    background: #042c4d;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Cta = styled.button`
  outline: none;
  border: none;
  background: #6b48ff;
  width: ${props => (props.width ? props.width : "210px")};
  height: 50px;
  border-radius: 40px;
  cursor: pointer;
  p {
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    font-weight: 600;
  }
  &:hover {
    background: #4b2dcc;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
