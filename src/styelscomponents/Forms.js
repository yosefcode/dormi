import styled from "styled-components";

export const Contenersend = styled.div`
  margin-top: 1%;
  text-align: center;
  padding-inline-end: 13px;
  display: flex;

  flex-direction: column;
  align-items: center;
  /* display: table; */
  @media print {
    /* -webkit-print-color-adjust: exact; */
  }
  table,
  th,
  td {
    border: 1px solid #d6e2f1;
  }

  @media only screen and (max-width: 600px) {
    .taskname {
      width: 264px;
    }
    .taskexecution {
      width: 66px;
    }
    table {
      margin-inline-start: 10px;
    }
  }
  @media only screen and (min-width: 600px) {
    .taskname {
      width: 411px;
    }
    .taskexecution {
      width: 111px;
    }
  }
  .taskname {
    text-align: start;
    text-align: start;

    padding: 7px;
  }
  .taskexecution {
    text-align: start;
    text-align: start;

    padding: 7px;
  }
  .formtable {
    display: flex;
    flex-direction: column;
  }

  .listofforms {
    color: #0f0743;
    text-decoration: underline;
    font-size: 17px;
    font-weight: bold;
    display: flex;
  }
  .gobacklistofforms {
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    background: none;
    border: none;
    margin-bottom: 24px;
    color: #0f0743;
    text-decoration: underline;
    font-size: 17px;
    font-weight: bold;
  }
  .ant-card {
    width: 315px;
  }
`;
export const Contener = styled.div`
  margin-top: 10%;
  text-align: center;
  padding-inline-end: 13px;
  display: flex;

  flex-direction: column;
  align-items: center;

  .buttonsubmit {
    background: #ffd17e;
    border-radius: 11px;
    width: 269px;
    height: 34px;
    border-color: #ffd17e;
  }
  .hader {
  }
  .haderbuuton {
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    background: none;
    border: none;
    margin-bottom: 24px;
    color: #0f0743;
    text-decoration: underline;
    font-size: 17px;
    font-weight: bold;
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
  .radio {
    text-align: start;
  }
  .checkbox {
    display: flex;

    flex-direction: row;

    justify-content: flex-start;
  }
  .checklable {
    font-weight: 500;
    font-size: 17px;
    line-height: 118.88%;
    text-align: center;
    color: #0f0743;
    margin-right: 18px;
    margin-top: 5px;
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
  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
`;
