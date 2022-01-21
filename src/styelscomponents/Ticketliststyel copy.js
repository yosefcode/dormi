import styled from "styled-components";
import { Drawer, Select, Modal } from "antd";
import { BsCheck } from "react-icons/bs";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-family: "Heebo";
  .Mangeroption {
    display: flex;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: space-around;
    margin-top: 20px;
    background-color: red;
    width: 84%;
  }
  // .btn_manger {
  //   background-color: red;
  // }

  .MangerButton {
    background-color: red;

    border: 10px solid #d6e2f1;
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

  @media only screen and (min-width: 600px) {
    #phoneactionbutton {
      display: none;
    }

    .shwobuttondropdown {
      display: none;
    }
    .Closepopup {
      width: 420px;

      border-radius: 43px;
    }
    .smallscreen {
      display: none;
    }
    .details {
      display: flex;
      justify-content: space-around;
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
  .action {
    position: absolute;
    left: 10px;
    border: none;

    background: none;
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
  #discriptun {
    font-weight: bold;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: -2px;
    color: #0f0743;
    line-height: 122.88%;

    text-align: start;
  }
  .Repeatedtask {
    background-color: rgba(255, 209, 126, 1);
    color: #0f0743;
    font-weight: 500;
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    .ant-card {
      width: 315px;
    }

    #desktopactionbutton {
      display: none;
    }
    .shwobuttondropdown {
      display: inherit;
    }
    .shwobutton {
      display: none;
    }

    .Closepopup {
      width: 100%;
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
      top: 9px;
      inset-inline-start: 282px;
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

    text-align: center;
    text-decoration-line: underline;

    color: #ffffff;
    background: none;
    border: none;
  }

  .Closepopup-numbertasks {
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
  }
  .ant-card-head {
    padding: none;
  }
  .ant-card-head {
    display: contents;
  }

  .cardtitel {
    display: flex;
    /* flex-direction: row; */
  }

  .closecheckboox {
    -webkit-appearance: none;

    padding: 0px;

    width: 19px;
    height: 19px;
    border: none;

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

  .clearbutton {
    color: #0f0743;
    width: 97px;
    background: none;
    border: none;
    margin-inline-start: 75%;
    margin-bottom: 5%;
    font-weight: 500;
    font-size: 14px;
    -webkit-text-decoration: underline;
    text-decoration: underline;
  }
  .ant-form-item {
    margin-bottom: 0px;
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

  .pointerblock {
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
  @media only screen and (min-width: 600px) {
    .urgency {
      height: 26px;
    }
  }

  .ant-card {
    background: #ffffff;
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
  }
  .ant-card-body {
    padding: 12px;
  }

  hr {
    border: 1px solid #e9f0f8;
  }

  #cooment {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 122.88%;
    color: #0f0743;
    margin-top: 5px;
  }
  #status {
  }
  .ant-badge-status-text {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #0f0743;
    margin-inline-start: 2.2px;
  }
  .ant-badge-status-dot {
    top: 0px;
  }

  .Smallcard {
    display: flex;
  }
  .urgency {
    background-color: #e5ebf3;
    margin-inline-start: 8px;

    padding-inline-start: 3px;
    padding-inline-end: 3px;
  }
  .cardbutton {
    background-color: white;
    border: none;
  }

  .Calltoaction {
    text-decoration-line: underline;
    font-weight: bold;
    color: #0f0743;
    margin-inline-start: 9px;
  }
  #displyid {
    margin-inline-start: 9px;
  }
`;
export const Selectfilter = styled.div`
  margin-top: 10px;
  .ant-select {
    width: 200px;
    border-color: none;
    margin-bottom: 3px;
    box-sizing: border-box;
    border-radius: 11px;
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
  }
`;

export const Quickclomodaltyle = styled(Modal)`
  font-family: "Heebo";

  .userQuickclosebuuton {
    display: flex;
    flex-direction: column;

    margin-top: 21%;
  }
  .listQuickclosebuuton {
    display: flex;
    flex-direction: column;

    margin-top: 21%;
  }
  .ant-modal-content {
    /* background-color: transparent; */
    /* width: 0px; */
  }
  .Quickclosebuutdownclose {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;

    color: #0f0743;
  }
  .Quickclosebuutonup {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    padding: 16px 15px 16px 0px;
    width: 310px;
    height: 56px;
    border-radius: 24px 24px 0px 0px;
    text-align: start;

    color: #0f0743;
  }
  .Quickclosebuutdown {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;
    /* identical to box height */
    border-radius: 0px 0px 24px 24px;

    text-align: start;

    color: #f71919;
  }
  .Quickclosebuuton {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;
    /* identical to box height */

    text-align: start;

    color: #0f0743;
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
    color: white;
    width: 100%;
    height: 63px;
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
`;

export const QuickcloDrawerstyle = styled(Drawer)`
  font-family: "Heebo";

  .userQuickclosebuuton {
    display: flex;
    flex-direction: column;
    margin-top: 73%;
  }
  .listQuickclosebuuton {
    display: flex;
    flex-direction: column;
  }
  .ant-drawer-content {
    background-color: transparent;
  }
  .Quickclosebuutdownclose {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;

    color: #0f0743;
  }
  .Quickclosebuutonup {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    padding: 16px 15px 16px 0px;
    width: 310px;
    height: 56px;
    border-radius: 24px 24px 0px 0px;
    text-align: start;

    color: #0f0743;
  }
  .Quickclosebuutdown {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;
    /* identical to box height */
    border-radius: 0px 0px 24px 24px;

    text-align: start;

    color: #f71919;
  }
  .Quickclosebuuton {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;
    /* identical to box height */

    text-align: start;

    color: #0f0743;
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
    color: white;
    width: 100%;
    height: 63px;
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
`;
export const Drawerstyle = styled(Drawer)`
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

  .ant-form-item {
    margin-bottom: 0px;
  }
  .ant-drawer-title {
    text-align: center;
  }
  .ant-drawer-footer {
    text-align: center;
    padding: 0px;
  }
  .ant-drawer-body {
    text-align: center;
  }
  .ant-select {
    width: 200px;
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
    /* border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    border-color: none; */
  }

  .ant-drawer-content {
    border-radius: 24px 24px 0px 0px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .Clear {
    width: 149.5px;
    height: 63px;
    border-color: white;
    background: #e5ebf3;
    border-radius: 11px;
    color: #0f0743;
  }
  .ok {
    width: 149.5px;
    height: 63px;
    color: white;
    background: #0f0743;
    border-radius: 11px;
    border-color: white;
  }
`;
export const StyeldSelect = styled(Select)`
  /* @media only screen and (min-width: 600px) {
    width: 110px;
  } */
  width: 97px;
  height: 24px;
  margin-top: -4%;
  background: #e5ebf3;
  margin-inline-start: 10%;
  .ant-badge-status-text {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;

    color: #0f0743;
    margin-inline-start: 2.2px;
  }
  .ant-badge-status-dot {
    top: 0px;
    margin-inline-start: 2px;
  }
  .ant-select-selector {
    pointer-events: ${(props) =>
      props.permission ? "auto" : "none"}!important;

    border: none !important;
    box-shadow: none !important;
  }

  .ant-card-extra {
    /* margin-right: -14px; */
  }
  .valueBadge {
    margin-top: -5%;

    text-align: start;

    height: 24px;
    background: #e5ebf3;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;

    /* color: #0f0743;
    width: 90px;
    height: 30px;
    font-weight: bold;
    text-align: -webkit-center; */
  }
  #valueBadgetext {
    /* background-color: red;
    top: 10px; */
  }
`;
