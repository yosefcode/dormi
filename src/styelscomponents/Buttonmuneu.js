import styled from "styled-components";
export const Buttonmuneu = styled.button`
  border: 1px solid #d6e2f1;
  box-sizing: border-box;
  border-radius: 11px;
  align-items: center;
  padding: 0px 16px;
  background-color: white;

  border-color: ${(props) => (props.presd ? "inherit" : "1px solid #0F0743")};
  width: 127.5px;
  height: 55px;
  color: #0f0743;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  margin-inline-end: 4%;
`;
