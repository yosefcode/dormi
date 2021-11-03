import styled from "styled-components";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  .action {
    border: none;
    position: absolute;
    left: 10px;

    background: none;
  }
  .Mangeroption {
    display: flex;
    margin-top: 11px;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: space-around;
  }
  @media only screen and (min-width: 600px) {
    .Smallcard {
      background-color: red;
    }
    .Mangeroption {
      margin-top: -8%;
    }
    .details {
      display: flex;
      justify-content: space-around;
    }
    .smallscreen {
      display: none;
    }
    .action {
      bottom: 69%;
    }
    .discriptun {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 90%;
    }
    .closecheckboox {
      position: absolute;
      top: 11%;
      inset-inline-start: 93%;
    }
    #discriptun {
      margin-inline-end: 24px;
    }
  }
  #discriptun {
    font-weight: bold;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: -2px;
    color: #0f0743;
    line-height: 122.88%;

    text-align: start;
  }
  @media only screen and (max-width: 600px) {
    .Mangeroption {
      margin-top: 11px;
    }
    #discriptun {
      margin-inline-end: -15px;
      margin-inline-start: 4px;
    }
    .fullscreen {
      display: none;
    }
    .action {
      bottom: 9px;
    }
    .discriptun {
      display: flex;
      flex-direction: column;
    }
    .closecheckboox {
      position: absolute;
      top: 23px;
      inset-inline-start: 282px;
    }
  }

  #cooment {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 122.88%;
    color: #0f0743;
  }

  .opentask {
    display: flex;
    margin-inline-start: 13px;
  }

  hr {
    border: 1px solid #e9f0f8;
  }
  .Calltoaction {
    text-decoration-line: underline;
    font-weight: bold;
    color: #0f0743;
    margin-inline-start: 9px;
  }
  .bigcardparagraf {
    margin-inline-start: 13px;
  }

  @media only screen and (min-width: 600px) {
    .Closepopup {
      width: 420px;

      border-radius: 43px;
    }
  }
  .Closepopup {
    position: fixed;
    bottom: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 30px;
    background-color: rgba(15, 7, 67, 1);
    height: 63px;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    .Closepopup {
      width: 100%;
    }
  }

  .Closepopupsubmit {
    padding: 0px 12px 0px 20px;

    width: 165px;
    height: 47px;

    background: #ffffff;
    border-radius: 11px;
    font-weight: bold;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;
    content: url("/images/lightning.svg");
    color: #0f0743;

    /* Inside Auto Layout */
  }
  .cancelClosep {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;
    text-decoration-line: underline;

    color: #ffffff;
    background: none;
    border: none;
  }
  .Closepopup-numbertasks {
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;

    color: #ffffff;
  }
  .clearbutton {
    background: none;
    color: #0f0743;
    border: none;
    margin-inline-start: 75%;
    margin-bottom: 5%;

    font-weight: 500;
    font-size: 14px;
    text-decoration: underline;
  }
  .closecheckboox {
    -webkit-appearance: none;

    padding: 0px;

    width: 19px;
    height: 19px;
    border: none;
    /* border: 1.52px solid #ffd17e; */
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
    margin-top: 2px;
  }

  .haderflex {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    word-wrap: break-word;
  }
  @media only screen and (max-width: 600px) {
    .ant-card {
      width: 315px;
    }
  }
  @media only screen and (min-width: 600px) {
    .ant-card {
      width: 900px;
    }
  }
  .ant-card {
    background: #ffffff;
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    margin-top: 4px;
  }
  .ant-card-body {
    padding: 12px;
  }
  .ant-card-extra {
    margin-right: -14px;
  }

  .cardbutton {
    background-color: white;
    border: none;
  }

  .MangerButton {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    width: 127.5px;
    height: 55px;
    color: #0f0743;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    margin-inline-end: 4%;
  }
  .DropdownButton {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    width: 44px;
    height: 55px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    position: relative;
  }

  .shwobutton {
    display: ${(props) => (props.Screnphunesize ? "none" : "inherit")};
  }

  .shwobuttondropdown {
    display: ${(props) =>
      props.Screnphunesize ? "inherit" : "none"}!important;
  }
  .ant-select {
    width: 200px;
    margin-top: 10px;

    border-color: none;
    margin-bottom: 3px;
    box-sizing: border-box;
    border-radius: 11px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    border-color: none;
    margin-bottom: 2px;
  }
  .ant-select-selector {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    border-color: none;
  }
`;
