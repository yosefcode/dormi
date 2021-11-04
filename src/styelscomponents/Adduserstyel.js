import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* margin-top: 6%; */
    align-content: space-between;
    align-items: center;
    button.ant-btn.ant-btn-primary {
      margin-inline-start: 24%;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 10%;
  }
  align-content: space-around;
  flex-wrap: wrap;
  .hader {
    font-weight: 500;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;

    color: #0f0743;
  }
  .goback {
    font-size: 47px;
    width: 10px;
    margin-top: -8%;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }

  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  @media only screen and (max-width: 600px) {
    .ant-form {
      width: 267px;
    }
  }

  hr {
    border-top: 1px #aaa;
    width: 90%;
  }
  .ant-form-item-label > label {
    width: 400px;

    color: #aaa;
    margin-bottom: -3px;
    align-items: center;
  }
  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 269px;
    height: 34px;
    border-color: #ffd17e;
  }
  .closecheckboox {
    -webkit-appearance: none;

    padding: 0px;

    width: 19px;
    height: 19px;

    border: 1.52px solid #ffd17e;
    box-sizing: border-box;
    border-radius: 76px;
    margin-top: 7px;
  }
  .closecheckboox:active {
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px 1px 3px rgba(0, 0, 0, 0.1); */
  }
  .closecheckboox:checked {
    content: url("/images/Vector.svg");
    align-items: center;
    padding: 0px;

    width: 19px;
    height: 19px;

    background: #ffd17e;
    border: 1.52px solid #ffd17e;
    box-sizing: border-box;
    border-radius: 76px;
  }
  .radiogrop {
    display: flex;
    flex-direction: column;
  }
  .radio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .ant-switch-checked {
    background-color: #ffd17e;
  }
`;
