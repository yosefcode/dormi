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
`;
