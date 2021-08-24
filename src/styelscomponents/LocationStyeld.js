import { Card } from "antd";

import styled from "styled-components";

export const Contener = styled.div`
  .categoriicon {
    border: 1px solid #fff;
    border-radius: 10px;

    height: 90px;

    width: 90px;
    text-align: center;

    margin-inline-start: 30%;
    color: gainsboro;
    position: absolute;
    color: rgba(0, 0, 0, 0.2);
  }
  .listofcards {
    display: flex;
    flex-wrap: wrap;
  }
  .hader {
    display: flex;
    width: 66%;
    margin: 40px;
    justify-content: space-between;
    text-align: center;
  }
  button {
    color: #fff;
    background-color: #4285f4;
    border: none;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  }
`;

export const CardStyeld = styled(Card)`
  width: 270px;
  height: 267px;
  margin: 31px;
  .ant-card-body {
    overflow-y: scroll;
    text-align: start;
    height: 208px;
  }
  .ant-card-head {
    background-color: rgba(0, 0, 0, 0.03);
    text-align: start;
  }
  .listodors {
    display: flex;

    flex-direction: column;
  }
  .singellocation {
    display: flex;
    margin: 10px;
    justify-content: space-between;
  }
  .internaldots {
    color: gray;
  }
  .noroms {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
`;
