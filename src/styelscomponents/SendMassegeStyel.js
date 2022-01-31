import styled from "styled-components";
import { Card } from "antd";
export const Card1 = styled(Card)`
  margin-top: 40px;
  width: 283px;

  .ant-card-body {
    background-color: #007bff;
  }
  .ant-card-head {
    background-color: #007bf0d4;

    text-align: start;
  }
`;
export const Card2 = styled(Card)`
  margin-top: 10px;
  width: 135%;

  .ant-card-head {
    background-color: rgba(0, 0, 0, 0.03);
    text-align: start;
  }
`;

export const Container = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  .listbutton {
    background-color: white !important;
    color: #4285f4;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  }
  .ant-form-item-label > label {
    width: 200px;

    color: #aaa;
    margin-bottom: -3px;
    align-items: center;
  }
  .ant-form-item-control-input {
    width: 215px;
  }
  @media only screen and (max-width: 600px) {
    .ant-form-item-label > label {
      position: static;
      width: 332px;
      height: 19px;
      text-align: right;

      /* margin: 5px 0px; */
    }
    .ant-form {
      position: absolute;

      width: 267px;
      margin-inline-end: 5%;
      text-align: center;
      padding-inline-end: 7%;
      padding-inline-start: 7%;
    }
  }
`;

export const Tag = styled.div`
  background-color: ${(props) => props.status}!important;
  color: white;
  text-align: center;
  width: 100px;
  margin-top: -19px;
  margin-inline-start: 60px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;
