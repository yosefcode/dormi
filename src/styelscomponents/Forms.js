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
  width: 100%;
  margin: 30px auto;
  padding: 50px;

  .buttonsubmit {
    background: #ffd17e;
    border-radius: 11px;
    width: 300px;
    height: 50px;
    border-color: #ffd17e;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 25px 50px;
  }

  .hader {
    width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .haderbuuton {
    background: none;
    border: none;
    color: #0f0743;
    text-decoration: underline;
    font-size: 1.7rem;
    font-weight: bold;
  }

  .ant-select {
    width: 100% !important;
  }
  .div_select_form {
    width: 300px;
    margin: 30px auto;
  }
  .div_check_form {
    width: 80%;
    margin: 30px auto;
  }

  .ant-form-item {
    margin-bottom: 32px;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
  }
  .closecheckboox {
    -webkit-appearance: none;
    padding: 0px;
    width: 19px;
    height: 19px;
    border: 1.52px solid #000;
    box-sizing: border-box;
    border-radius: 76px;
  }

  .closecheckboox:checked {
    content: url("/images/Vector.svg");
    align-items: center;
    padding: 2px;
    width: 19px;
    height: 19px;
    background: #ffd17e;
    border: 1.52px solid #ffd17e;
    box-sizing: border-box;
    border-radius: 76px;
  }

  .radio {
    text-align: start;
    margin-top: 25px;
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 5px;
  }

  .checklable {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 118.88%;
    color: #0f0743;
    margin-right: 18px;
  }

  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    width: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 84%;
    padding: 30px 0;

    .div_select_form {
      width: 100% !important;
      margin: 30px auto;
    }
    .div_check_form {
      width: 100%;
    }
    .hader {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .ant-input {
      border: 1px solid #d6e2f1;
      border-radius: 11px !important;
      width: 100%;
    }
    .buttonsubmit {
      width: 100% !important;
      margin: 25px 0px;
    }
  }
`;
