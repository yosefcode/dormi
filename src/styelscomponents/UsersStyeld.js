import styled from "styled-components";
import { Card } from "antd";

export const Contener = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .serch {
    width: 170px;
  }
  .sendmail {
    color: #fff;

    background-color: #000;
    border-radius: 17px;
    height: 36px;

    border: none;
  }

  .adduser {
    color: #fff;

    background-color: #00c851;

    height: 36px;
    border-radius: 17px;
    border: none;
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

export const Cardstyeld = styled(Card)`
  @media only screen and (max-width: 600px) {
    width: 298px;
    span {
      margin: 5px;
    }
  }

  @media only screen and (min-width: 600px) {
    span {
      margin: 40px;
    }
  }
  width: 750px;

  height: 49px;
  text-align: center;
  margin-top: 10px;
`;
