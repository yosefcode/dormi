import styled from "styled-components";
export const Buttonmuneu = styled.button`
  border-radius: 11px;
  align-items: center;
  padding: 0px 16px;
  background-color: white;
  width: 24%;
  height: 55px;
  color: #0f0743;
  font-size: 1.5rem;
  font-weight: 500;
  margin-inline-end: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid #d6e2f1;
  border-color: ${(props) => (props.presd ? "inherit" : "1px solid #0F0743")};

  .MangerButton_plan {
    width: 42% !important;
  }
`;
