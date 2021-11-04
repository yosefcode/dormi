import styled from "styled-components";

export const Contener = styled.div`
  /* height: 360px; */
  font-family: "Heebo";
  .ant-form-item-label > label {
    width: 78px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    color: #0f0743;
    margin-bottom: -3px;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    /* height: 100vh; */
    direction: rtl;
    display: grid;
    grid-template-areas:
      "header header"
      "wrapper navlogin ";

    grid-template-rows: 3% 1fr;
    grid-template-columns: 1fr 300px;
    grid-gap: 1px;
    .hader {
      grid-area: header;

      height: 76px;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      box-shadow: 0px 1px 0px rgba(15, 7, 67, 0.05);
      background-color: #1c1547;
      margin-bottom: 1px;
    }
    .wrapper {
      grid-area: wrapper;
      margin-top: 3%;

      background-size: cover;
      height: 87vh;

      position: relative;
    }
    .loginimag {
      position: absolute;
      width: 550px;
    }
    .form {
      margin-top: 14%;
      margin-inline-start: 40%;
      width: 30%;
    }
    .navlogin {
      margin-top: 17%;
      grid-area: navlogin;
      background-color: #e5e5e5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      color: #0f0743;
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    .hader {
      grid-area: header;

      height: 76px;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      box-shadow: 0px 1px 0px rgba(15, 7, 67, 0.05);
      background-color: #1c1547;
      margin-bottom: 1px;
    }
    .navlogin {
      display: none;
    }
    .wrapper {
      display: flex;
      position: relative;
    }
    .form {
      margin-top: 31%;
      margin-inline-start: 12%;
    }
    .loginimag {
      position: absolute;
      width: 100%;
    }
  }

  .bg-qr {
    margin-top: -77%;
    margin-inline-start: 5%;
  }
  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .ant-input-affix-wrapper {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .subbutton {
    margin: 12px;
    height: 63px;
    width: 176px;
    background: #ffd17e;
    border-radius: 11px;
    border-color: #ffd17e;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
  }
  .buttonwraper {
    position: relative;
    display: flex;
    float: right;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
  }
  .errmaseg {
    position: relative;
    padding: 4px;

    margin-top: 34px;
    text-align: center;
    background-color: #ff7875;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    word-wrap: break-word;
  }
  .emailmassg {
    position: relative;
    padding: 4px;

    margin-top: 34px;
    text-align: center;
    background-color: #f0ffff;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    word-wrap: break-word;
  }
  .passbutoon {
    width: 25%;

    height: 63px;
    background: #e5ebf3;
    border-radius: 11px;
    border-color: #e5ebf3;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    margin-top: 12px;
  }
`;
