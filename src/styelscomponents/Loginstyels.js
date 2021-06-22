import styled from "styled-components";
import { Form, Select, Checkbox, Input, Modal, Button } from "antd";

export const Contener = styled.div`
  display: flex;
  text-align: start;
  margin: 82px;
  .info {
    margin-inline-start: 40px;
  }
  .qrcode {
    margin-inline-start: 146px;
    margin-top: 34px;
  }
  .passbutoon {
    background-color: white;
    height: 32px;
    border: none;
    margin-inline-start: 10%;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  }
  .avatar {
    width: 100px;
  }
  .bg-info {
    display: flex;
    background-color: blue;
    justify-content: space-between;
    text-align: start;
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
    .bg-qr {
      display: none;
    }
    .bg-info {
      display: none;
    }
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
      margin-left: 5%;
      text-align: center;
      padding-left: 7%;
      padding-right: 7%;
    }
  }
`;
