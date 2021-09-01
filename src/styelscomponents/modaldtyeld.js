import { Modal } from "antd";

import styled from "styled-components";
export const ModalStyeld = styled(Modal)`
  .ant-modal-content {
    border-radius: 19px;
    text-align: center;
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

  .formedittask {
    display: flex;
    /* background-color: blue; */
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
