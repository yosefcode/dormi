import styled from "styled-components";
import { Drawer, Select } from "antd";
import { BsCheck } from "react-icons/bs";
export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
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
    font-weight: bold;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;

    color: #ffffff;
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
  @media only screen and (min-width: 600px) {
    .closecheckboox {
      margin-right: 63%;
    }
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
  .Mangeroption {
    display: flex;

    margin-top: 11px;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: space-around;
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
  .action {
    display: flex;

    justify-content: space-between;
  }
  .shwobutton {
    display: ${(props) => (props.Screnphunesize ? "none" : "inherit")};
  }

  .shwobuttondropdown {
    display: ${(props) =>
      props.Screnphunesize ? "inherit" : "none"}!important;
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

    #status {
      font-weight: bold;
    }
    #cooment {
      font-size: 14px;
      margin-top: -19px;
      /* or 17px */
      color: #0f0743;
    }
  }
  @media only screen and (min-width: 600px) {
    #cooment {
      margin-top: 0;
      font-size: 14px;

      color: #0f0743;
    }

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
    color: #d6e2f1;
  }
  #discriptun {
    margin-inline-end: -15px;
    margin-inline-start: 4px;
    font-weight: bold;
    font-size: 17px;
    margin: 4px 7px;
    color: #0f0743;
    line-height: 122.88%;
    width: 291px;
    height: 21px;
    text-align: right;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 4px 0px;
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
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    border-color: none;
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
  width: 110px;
  height: 24px;

  .ant-select {
    border: none !important;
    width: 20px !important;
  }

  .ant-select-selector {
    pointer-events: ${(props) =>
      props.Permission ? "auto" : "none"}!important;
    font-size: 12px;
    border: none !important;
    box-shadow: none !important;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
    width: 124px;
  }
  .ant-select-selector::hover {
    box-shadow: none !important;
  }
  .ant-select-rtl.ant-select-single.ant-select-show-arrow
    .ant-select-selection-item {
    border: none !important;
  }
  .ant-select-arrow {
    display: ${(props) => (props.Permission ? "inherit" : "none")}!important;
    color: #0f0743;
    /* background-color: red; */

    top: 16px;

    inset-inline-start: 83px;
  }

  .ant-card-extra {
    margin-right: -14px;
  }
  .valueBadge {
    color: #0f0743;
    background: #e5ebf3;
    width: 90px;
    height: 30px;
    font-weight: bold;
    text-align: -webkit-center;
  }
  #valueBadgetext {
    background-color: red;
    top: 10px;
  }
`;
