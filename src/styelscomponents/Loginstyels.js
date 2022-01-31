import styled from "styled-components";

export const Contener = styled.div`
  height: 100vh;
  background: #1c1547;
  position: fixed;
  width: 100%;
  font-family: "Heebo";

  .ant-form-item-label > label {
    width: 78px;
    font-style: normal;
    font-weight: 500;
    font-size: 1.7rem;
    color: #ffff;
    margin-bottom: -10px;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    direction: rtl;

    .hader svg {
      width: 80%;
    }
    .hader {
      position: absolute;
      height: 25vh;
      width: 20%;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .loginimag {
      position: absolute;
      width: 30%;
    }
    .form {
      width: 50%;
      position: fixed;
      height: 60vh;
      left: 25%;
      bottom: 0;
      padding: 5vh 10%;
    }
    .navlogin {
      padding: 30px;
      text-align: center;
      position: fixed;
      width: 20%;
      height: 75vh;
      left: 0;
      bottom: 0;
      background-color: #e5e5e5;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      font-style: normal;
      font-weight: bold;
      font-size: 1.7rem;
      color: #0f0743;
    }
    .ant-input {
      width: 100%;
      height: 8vh !important;
      max-height: 55px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 100vh;
    background: #1c1547;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;

    .hader {
      height: 76px;

      margin: 42vh auto;
    }
    .navlogin {
      display: none;
    }
    .wrapper {
      width: 100%;
      position: absolute;
      height: 50vh;
      bottom: 0;
      // display: flex;
      // position: relative;
    }
    .form {
      width: 70%;
      margin: 0 auto;
    }
    label {
      color: white;
    }
    .ant-input {
      width: 100%;
      height: 55px !important;
      max-height: 55px !important;
    }
    .ant-form-item {
      margin-bottom: 15px;
    }
    // .ant-form {
    //   width: 100%;
    //   height: 45px !important;
    //   max-height: 45px !important;
    // }
    .loginimag {
      position: absolute;
      height: 55%;
      right: 0;
      top: 2%;
    }
  }

  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .ant-input-affix-wrapper {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    padding: 0 11px !important;
  }
  .subbutton {
    height: 8vh;
    width: 60%;
    background: #ffd17e;
    border-radius: 11px;
    border-color: #ffd17e;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
  }
  .buttonwraper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    margin-top: 5vh;
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
    height: 8vh;
    width: 30%;
    background: #e5ebf3;
    border-radius: 11px;
    border-color: #e5ebf3;
    color: #0f0743;
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
  }
`;
