import { Modal } from "antd";
import styled from "styled-components";
export const ModalStyeldnewreq = styled(Modal)`
  .ant-modal-content {
    border-radius: 19px;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    padding: 40px;
    margin-top: -50px;
  }

  .ant-modal-header {
    border-bottom: none;
    text-align: right;
    padding: 0;
    margin-bottom: 20px;
  }
  .ant-modal-title {
    font-size: 2.4rem;
    font-weight: 700;
    font-family: "Heebo";
    color: #0f0743;
  }
  .ant-modal-body {
    padding: 0;
  }
  .div_btn_send {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 70%;
    height: 55px;
    color: #0f0743;
    border: none;
    font-size: 1.7rem;
    font-weight: 700;
  }
  .cancel {
    width: 25%;
    height: 55px;
    border: none;
    background: #e5ebf3;
    border-radius: 11px;
    color: #0f0743;
    font-size: 1.7rem;
    font-weight: 700;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    border-color: none;
    margin: 0 0;
    height: 50px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }

  .ant-form-item textarea.ant-input {
    padding: 10px 23px;
  }

  .selecthiden {
    display: flex;
    justify-content: space-between;
  }

  .select_half {
    width: 48%;
  }
  .ant-select-arrow {
    // display: none;
  }
`;
export const ModalStyeld = styled(Modal)`
  .ant-modal-close {
    right: initial;
    left: -15px;
    top: -13px;
  }
  .ant-modal-close-x {
    color: red;
    font-size: 2rem;
  }

  .ant-modal-header {
    border-radius: 19px;
    border-bottom: none;
    text-align: center;
  }
  .okbutton {
    color: #fff;
    background-color: #4285f4;
    border: none;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
  }
  @media only screen and (max-width: 600px) {
    .formedittask {
      display: flex;
      flex-direction: column;
    }
  }
  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .ant-select {
    width: 300px;
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

  .formedittask {
    display: flex;
    /* background-color: blue; */
  }
  .modalbutoonsend {
    width: 149.5px;
    height: 63px;

    background: #0f0743;
    border-radius: 11px;
    font-weight: bold;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;

    color: #ffffff;
  }
  .edittask {
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
  }
  .taskleft {
    margin-inline-start: 1%;
    /* background-color: blue; */
  }
  .taskright {
    /* background-color: red; */
  }
  .ant-form-item {
    display: contents;
  }
  .canvas_wrapper {
    position: relative;
  }
  .canvas_wrapper .clear_button {
    position: absolute;
    bottom: 6%;
    left: 12%;
    color: #7b93a0;
    text-decoration-line: underline;
  }
  .SignaturCanvas {
    position: static;
    width: 290px;
    height: 180px;
    left: 0px;
    top: 0px;
    margin-top: 4%;
    background: #f1f1f1;
    border-radius: 7px;
    margin-bottom: 3%;
  }
`;
