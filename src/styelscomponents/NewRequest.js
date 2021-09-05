import styled from "styled-components";
import { Select } from "antd";

export const Problemcontener = styled.div`
  color: white;
  display: flex;
  text-align: start;
  #hadep {
    font-size: 31px;
  }
  .icondisply {
    /* position: absolute; */
    margin-top: 20px;
  }
  .listofproblom {
    display: flex;

    flex-wrap: wrap;
  }
  .avatar {
    margin-top: 35px;
  }

  .uniqueproblem {
    margin-inline-start: 23%;
  }

  .problome :hover {
    color: black;
  }

  .iconproblem {
    border: 1px solid #fff;
    border-radius: 10px;
    font-size: 33px;
    height: 90px;
    line-height: 6px;

    padding: 30px;
    width: 90px;
    text-align: center;
    margin: 7px;
  }
  @media only screen and (max-width: 600px) {
    .icondisply {
      position: absolute;
      margin-top: 20px;
      padding-inline-start: 38px;
    }
    .avatar {
      margin-top: 35px;

      width: 175px;
      height: 500px;
      position: relative;
      right: 20%;
    }
  }
`;

export const FormContener = styled.div`
  display: flex;
  justify-content: start;
  /* .ant-select-item-option-content {
    text-align: center !important;
  } */

  .ant-select.ant-select-item-option-content {
    text-align: center !important;
    background-color: blue !important;
  }
  button.ant-btn.ant-btn-primary {
    background-color: #f5a623;
    border-radius: 10px;
    margin-right: 50%;
  }

  .Radio1 {
    background-color: #d0021b;
    color: white;
    border-radius: 10px;
    width: 100px;
  }
  .Radio2 {
    background-color: #f3a40c;
    color: white;
    border-radius: 10px;
    width: 100px;
  }
  .Radio3 {
    background-color: #42bd41;
    color: white;
    border-radius: 10px;
    width: 100px;
  }
  .ant-input {
    border-bottom-color: #ced4da;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    background-color: blue !important;
  }

  .ant-select-selector {
    border-bottom-color: #ced4da !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  .goback {
    background: #f5a623;
    text-align: center;
    color: white;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    position: relative;
    padding: 8px;
    inset-inline-start: 96%;
  }
  svg {
    width: 32%;
    height: 15px;
    color: white;
  }
  .textbloon {
    width: 274px;
    height: 146px;
    background: white;
    position: relative;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    text-align: center;
  }

  .avaterpopup {
    content: "";
    position: absolute;
    right: 100%;
    top: 96px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid white;
    border-bottom: 13px solid transparent;
  }
  .uploadimage {
    margin-top: 5%;
  }
  .uploadimage button {
    width: 217px;
    height: 45px;
    color: white;
    background-color: blue;
    margin-top: 6px;
    border-radius: 100px;
  }
  .ant-upload-list-picture .ant-upload-list-item-error,
  .ant-upload-list-picture-card .ant-upload-list-item-error {
    border-color: #f3a40c;
  }
  .ant-upload.ant-upload-select-picture-card {
    border: white !important;
  }
  .ant-upload.ant-upload-select.ant-upload-select-picture-card {
    width: 217px;
    height: 45px;
    left: calc(50% - 343px / 2);
    top: 334px;
    background-color: #00c851 !important;

    border-radius: 100px;
  }
  .uplodeimage {
    color: white;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 10%;
    .avatar {
      width: 175px;
      height: 500px;
      margin-inline-start: 17%;

      position: relative;
    }

    .ant-form {
      margin-inline-start: 32%;
      position: absolute;
      width: 600px;

      text-align: center;
      padding-left: 7%;
      padding-right: 7%;
    }
    .frequency {
      float: left;
      margin-top: -106px;
      width: 243px;
      margin-inline-end: 25px;
    }
    .Radio1 {
      margin-inline-start: -260px;
    }
    .Radio2 {
      margin-inline-start: -260px;
    }
    .Radio3 {
      margin-inline-start: -260px;
    }
  }
  .ant-input {
    border-bottom-color: #aaa;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    background-color: white !important;
  }
  .ant-select-selector {
    border-bottom-color: #aaa !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    background-color: transparent !important;
  }
  // iphune screen
  @media only screen and (max-width: 600px) {
    margin-top: 10%;

    .ant-form-item-label > label {
      position: static;
      width: 332px;
      height: 19px;
      text-align: right;

      /* margin: 5px 0px; */
    }

    .avatar {
      /* background-color: gray; */
      width: 175px;
      height: 500px;
      position: relative;
      right: 20%;
    }
    /* .goback {
    } */
    .ant-form {
      position: absolute;

      width: 267px;
      margin-left: 5%;
      text-align: center !important;
      padding-left: 7%;
      padding-right: 7%;
    }
  }
`;
