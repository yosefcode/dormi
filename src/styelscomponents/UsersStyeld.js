import styled from "styled-components";
import { Card, Table } from "antd";

export const Cardstyeld = styled(Card)`
  /* @media only screen and (max-width: 600px) {
  } */
  .ant-card-bordered {
    width: 239px;
    margin-top: 12px;
  }
  /* .ant-card.ant-card-bordered.ant-card-type-inner.ant-card-rtl {
    /* .ant-card-bordered { */
  /* width: 700px;
    margin-top: 12px;
  }  */
`;
export const Contener = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  .haderflex {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  /* align-items: center; */

  /*
  .test {
    width: 100px;
    height: 100px;
    background: blue;
    color: red;
  }
  .usecard {
    background-color: red;
    width: 100px;
    height: 10px;
  }
  .serch {
    width: 170px;
  }
  .sendmail {
    color: #fff;
    background-color: #000;
    border-radius: 17px;
    height: 36px;
    padding: 1%;
    border: none;
  }

  .adduser {
    color: #fff;
    background-color: #00c851;
    height: 36px;
    border-radius: 17px;
    border: none;
    padding: 1%;
  }
  @media only screen and (max-width: 600px) {
    .adduser {
      color: #fff;
      background-color: #00c851;

      height: 36px;
      border-radius: 17px;
      font-size: 10px;
      border: none;
      margin-inline-start: 5px;
    }
    .sendmail {
      color: #fff;
      font-size: 10px;

      background-color: #000;

      border-radius: 17px;
      height: 36px;
      margin-inline-start: 5px;

      border: none;
    }
  }

 */
`;

export const Tablestyel = styled(Table)`
  /* @media only screen and (max-width: 600px) {
  
  } */
`;
