import styled from "styled-components";
import { Select } from "antd";

export const Problemcontener = styled.div`
  color: rgba(15, 7, 67, 1);
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
    text-align: center;
  }
  .problome {
    background: #e5ebf3;
    border-radius: 24px;
    width: 133px;
    height: 140px;
    margin: 2%;
  }

  .iconproblem {
    font-size: 33px;
    /* height: 90px; */
    line-height: 6px;
    padding: 0px;
    width: 60px;
    text-align: center;
    margin: 34px;
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
  margin-top: 10%;
  text-align: center;

  display: flex;

  flex-direction: column;
  align-items: center;
  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 269px;
    height: 34px;
    border-color: #ffd17e;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }

  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .ant-form {
    width: 267px;
  }
  .Lable {
    color: #0f0743;
    text-align: start;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 10%;
    text-align: center;

    display: flex;

    flex-direction: column;
    align-items: center;

    .ant-form {
      width: 267px;
    }
  }

  .goback {
    margin-inline-end: 100%;
    margin-bottom: 12%;
    font-size: 24px;
  }

  .theproblemis {
    display: -webkit-box;
  }
  .iconproblem {
    font-size: 100px;
    color: black;
    width: 54%;
    height: 15px;
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
  .uploadimage-send {
    width: 217px;
    height: 45px;
    color: white;
    background-color: blue;
    margin-top: 6px;
    border-radius: 100px;
  }
  .ant-tooltip-inner {
    /* display: none; */
  }

  .ant-upload-list-picture .ant-upload-list-item-error,
  .ant-upload-list-picture-card .ant-upload-list-item-error {
    /* border-color: #f3a40c; */
  }
  .ant-upload.ant-upload-select-picture-card {
    /* border: white !important; */
  }
  .ant-upload.ant-upload-select.ant-upload-select-picture-card {
    /* width: 217px;
    height: 45px;
    left: calc(50% - 343px / 2);
    top: 334px;
    background-color: #00c851 !important;

    border-radius: 100px; */
  }
  .uplodeimage {
    color: white;
  }

  .frequency {
    float: left;
    margin-top: -106px;
    width: 243px;
    margin-inline-end: 25px;
  }

  // iphune screen
`;
