import styled from "styled-components";
export const Continer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .column {
    display: flex;
    flex-direction: row;

    margin-bottom: 12px;
  }
  @media (min-width: 600px) {
    .item {
      margin: 25px;
    }
    svg {
      direction: ltr !important;
    }
  }
  @media (max-width: 600px) {
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;

      /* align-items: center; */
    }
    .item {
      margin-top: 19px;
      margin-bottom: 60px;
      width: 325px;
      height: 195px;
    }
    svg {
      object-fit: fill;
      /* object-fit: contain; */
      direction: ltr !important;
    }
  }
  @media print {
    .teststyelt {
      width: 100px;
      height: 100px;
      background-color: red;
    }
  }
`;
