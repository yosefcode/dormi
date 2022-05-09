import { Modal } from "antd";
import styled from "styled-components";
export const ModalStyeldnewreq = styled(Modal)`
  .ant-modal-content {
    border-radius: 19px;
    text-align: center;
    min-width: 520px;
    max-width: 50%;
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
  .ant-picker-focused {
    border-color: #40a9ff !important;
  }

  .select_half {
    width: 48%;
  }
  .ant-picker {
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
  .ant-select-arrow {
    // display: none;
  }
  .ant-modal-close {
    display: none;
  }
`;
export const ModalStyeld = styled(Modal)`
  .ant-modal-close {
    background: white;
    border-radius: 50%;
    // right: initial;
    // left: -15px;
    // top: -13px;
  }
  .ant-modal-close-x {
    // color: red;
    font-size: 2rem;
  }

  .ant-modal-content {
    min-width: 520px;
    max-width: 60%;

    // width: 60% !important;
    margin: 0 auto !important;
    min-height: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }
  .add_icon {
    width: 300px;
    max-height: 200px;
    overflow-y: scroll;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    margin-bottom: 20px;
  }
  .add_icon::-webkit-scrollbar {
    width: 10px;
  }

  .add_icon::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 2px grey;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.36);
  }

  .add_icon::-webkit-scrollbar-thumb {
    background: #d6e2f1;
    border-radius: 10px;
  }

  .icon_modal {
    width: 50px;
    height: 50px;
    border: 1px solid #d6e2f1;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon_modal_active {
    width: 50px;
    height: 50px;
    border: 2px solid #ffd17e;
    border-radius: 5px;
    padding: 5px;
    margin: 0px 5px;
    cursor: pointer;
    margin: 10px 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon_chek {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    width: 300px;
    max-width: 100%;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .btn_del_icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    height: 30px;
    width: 30px;
    boredr: 0;
    background: none;
    color: #0f0743;
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
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

  .err_border {
    border-color: red !important;
  }

  .div_modal {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 80px;
  }

  @media only screen and (max-width: 600px) {
    .ant-modal-content {
      min-width: 100%;
      max-width: 100%;

      width: 100% !important;
      margin: 0 auto !important;
      // min-height: 70vw;
      display: flex;
      align-items: center;
      justify-content: center;
      // transform: translate(0, 35%);
      border-radius: 12px;
    }

    .formedittask {
      display: flex;
      flex-direction: column;
    }
  }
  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    width: 300px;
    max-width: 100%;
    min-height: 55px;
  }
  .ant-select {
    margin: 0px auto !important;
    width: 300px;
    max-width: 100%;
  }
  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
  }

  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    min-width: 150px;
    height: 40px;
    border-color: #ffd17e;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 10px auto;
  }
  .ant-modal-body {
    width: 100%;
  }
  .continer_formedittask {
    width: 100%;
    font-weight: 700;
    font-size: 2.2rem;
    text-align: center;
  }

  .ant-input-affix-wrapper {
    display: block;
  }
  .formedittask {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .modalbutoonsend {
    background: #ffd17e;
    border-radius: 11px;
    width: 40%;
    height: 40px;
    border-color: #ffd17e;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 30px 30% 0;
    border: none;
  }
  .ant-upload-list {
    margin: 20px auto;
    text-align: center;
  }
  .edittask {
    width: 47%;
    margin-top: 25px;
    font-weight: 500;
    font-size: 1.5rem;
  }
  .taskleft {
    margin-inline-start: 1%;
    /* background-color: blue; */
  }
  .taskright {
    /* background-color: red; */
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
    width: 100%;
    height: 180px;
    background: #f1f1f1;
    border-radius: 7px;
  }
  .ant-row {
    display: block;
  }
`;
