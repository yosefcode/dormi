import styled from "styled-components";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
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
  .titelcard {
    display: flex;
    align-content: flex-end;
    justify-content: space-around;
    align-items: center;
  }
  .cardbutton {
    background-color: white;
    border: none;
  }
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
  .action {
    display: flex;
    justify-content: space-around;
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
