import styled from "styled-components";
import { Form, Select, Checkbox, Input, Modal, Button } from "antd";

export const Contener = styled.div`
  .ant-input {
    border-bottom-color: #aaa;
    border-left-color: white;
    border-right-color: white;
    border-top-color: white;
  }
  .ant-select-selector {
    border-bottom-color: #aaa !important;
    border-left-color: white !important;
    border-right-color: white !important;
    border-top-color: white !important;
  }

  .userpersonalinfi {
    margin-left: 5%;
    text-align: center;
    padding-left: 7%;
    padding-right: 7%;
  }
  .usernoteficationautt {
    /* background-color: green; */
    /* display: flex; */
    /* flex-direction: column; */
    margin-left: 5%;
    text-align: center;
    padding-left: 7%;
    padding-right: 7%;
  }
  .noteficationautt {
    display: flex;
  }
  @media only screen and (min-width: 600px) {
    .ant-form {
      display: flex;
    }
  }

  /* .ant-form-item {
    display: flex;
    flex-direction: column;
  } */
`;
export const Styeldformitem = styled(Form.Item)`
  .ant-form-item-label > label {
    /* display: none; */
    font-size: 11px;
    color: #aaa;
    margin-bottom: -3px;
    align-items: center;
  }
  .ant-form-horizontal .ant-form-item-control {
    margin-inline-start: 4%;
  }
  .ant-form-item-control-input {
    padding: 2%;
  }
`;
export const Styeldformitem2 = styled(Form.Item)`
  .ant-form-item-label > label {
  }
  .ant-row.ant-form-item {
    display: contents !important;
  }
`;
