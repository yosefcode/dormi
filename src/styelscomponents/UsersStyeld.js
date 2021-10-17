import styled from "styled-components";
import { Card, Table } from "antd";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  .haderflex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Tablestyel = styled(Table)`
  /* @media only screen and (max-width: 600px) {
  
  } */
`;
