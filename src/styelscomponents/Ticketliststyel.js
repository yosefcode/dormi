import styled from "styled-components";
import { Drawer } from "antd";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  .Mangeroption {
    display: flex;

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
  /*

  .Dropdown-item {
    background: #fafcff;
    box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 30%);

    color: #0f0743;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    margin: 2px;
    height: 40px;

    border-radius: 9px;
    padding: 2%;
  }
  .Dropdown {
    width: 279px;
    height: 141px;
    
    position: absolute;
    top: 137px;
    animation: mymove 0.2s;
  } */
  /* .Dropdown-button {
    height: 40px;
    width: 277px;
    margin-top: 2px;
    background: #ffffff;
    border-radius: 9px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;

    color: #0f0743;
    text-align: center;
    box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 30%);

    color: #0f0743;
    border: none;
  } */
  .shwobutton {
    display: ${(props) => (props.Screnphunesize ? "none" : "inherit")};
  }

  .shwobuttondropdown {
    display: ${(props) =>
      props.Screnphunesize ? "inherit" : "none"}!important;
  }

  @media only screen and (max-width: 600px) {
    .ant-card {
      width: 90%;
    }
    #cooment {
      font-size: 14px;
      margin-top: -19px;
      /* or 17px */

      color: #0f0743;
    }
  }
  @media only screen and (min-width: 600px) {
    .Smallcard {
      display: flex;
      justify-content: space-around;
    }
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
    width: 80%;
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
    font-weight: bold;
    font-size: 17px;

    color: #0f0743;
  }

  .urgency {
    background-color: #e5ebf3;
    margin-inline-start: 8px;

    padding-inline-start: 3px;
    padding-inline-end: 3px;
  }
  .cardbutton {
    margin-inline-start: 86%;
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
  .action {
    display: flex;
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
`;
export const Drawerstyle = styled(Drawer)`
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
