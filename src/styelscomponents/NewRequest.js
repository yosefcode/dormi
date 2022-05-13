import { Modal } from "antd";
import styled from "styled-components";

export const Problemcontener = styled.div`
  /* color: rgba(15, 7, 67, 1);
  display: flex;
  text-align: start; */
  font-family: "Heebo";

  #hadep {
    font-size: 2.4rem;
    font-weight: 700;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    .wrapper {
      margin-top: 26px;
      display: grid;
      grid-template-columns: 40vw 40vw;
      grid-gap: 4vw;
      grid-auto-rows: 20.5vw;
    }

    .item {
      height: 45vw;
      display: flex;
      background-color: #e5ebf3;
      border-radius: 16px;
      grid-row-end: span 2;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .space {
      grid-area: 1;
    }
  }
  @media (min-width: 600px) {
    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      background: rgba(229, 235, 243, 1);
      border-radius: 24px;
      width: 133px;
      height: 140px;
      margin: 2%;
    }
  }

  .uniqueproblem {
    font-weight: 500;
    font-size: 1.6rem;
  }

  .iconproblem {
    font-size: 15vw;
  }
  @media only screen and (max-width: 600px) {
    .icondisply {
      width: 84%;
      margin: 80px auto;
      padding-bottom: 60px;
    }
  }
`;
export const FormContenerdesktop = styled.div`
  /* word-wrap: break-word; */
  .headr_newreq {
    font-size: 2.4rem;
    font-weight: 700;
    font-family: "Heebo";
    color: #0f0743;
    text-align: right;
  }
  margin-top: 10px;
  .goback {
    background: inherit;

    border: none;
    font-size: 19px;
    float: right;
    margin-top: -69px;
  }
  // .cancel {
  //   width: 157px;
  //   height: 63px;
  //   left: 515px;
  //   top: 13px;

  //   background: #e5ebf3;
  //   border-radius: 11px;
  //   border-color: #e5ebf3;
  //   color: rgba(15, 7, 67, 1);
  //   float: right;
  // }
  .selecthiden {
    display: flex;
  }
  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 59px;
    padding: 14px;
  }

  // .ant-btn.ant-btn-primary {
  //   background: #ffd17e;
  //   border-radius: 11px;
  //   width: 491px;
  //   height: 63px;
  //   border-color: #ffd17e;
  //   color: rgba(15, 7, 67, 1);
  //   float: left;
  // }
  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px;
  }
  .ant-select-rtl.ant-select-single.ant-select-show-arrow
    .ant-select-selection-item {
    display: flex !important;
    text-align: right;
    align-items: center !important;
  }
  .flexposition {
    flex-grow: 2;
    margin-inline-end: 4px;
    margin-inline-start: 4px;

    /* margin: 1px; */
  }
  /*

  flex-direction: column;
  align-items: center;


  .ant-form {
    width: 100%;
  }
  .Lable {
    color: #0f0743;
    text-align: start;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 10%;
    text-align: center;

    display: flex;

    flex-direction: column;
    align-items: center;

    .ant-form {
      width: 100%;
    }
  }

  @media only screen and (min-width: 600px) {
    .goback {
      align-self: flex-start;
      font-size: 47px;
    }
  }
  .theproblemis {
    display: -webkit-box;
  }
  .iconproblem {
    font-size: 100px;
    color: black;
    width: 54%;
    height: 15px;
  }
  .textbloon {
    width: 274px;
    margin-top: -34px;
  }

  @media only screen and (max-width: 600px) {
    .Sendedmassege {
      width: 180px;
      height: 180px;
    }
  }
  @media only screen and (min-width: 600px) {
    .Sendedmassege {
      width: 310px;
      height: 310px;
    }
  }
  // .avaterpopup {
  //   width: 100%;
  //   height: 0;
  //   border-top: 13px solid transparent;
  //   border-right: 26px solid white;
  //   border-bottom: 13px solid transparent;
  //   display: contents;
  // }
  .uploadimage {
    margin-top: ${(props) => (props.Position >= 1 ? "0px" : "100px")};

    width: 258px;
    height: 63px;
    left: 1px;
    top: 661px;
    height: 50px;
    background: #ffd17e;
    border-radius: 11px;
    color: #0f0743;
    font-weight: bold;
    font-size: 17px;
    border-color: white;
  }
  .camraicon {
    color: #0f0743;
    font-size: 17px;
  }
  .ant-upload-list {
    display: flex;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .ant-upload-list-item-error {
    border-color: white;
  }
  .ant-tooltip {
    visibility: collapse;
  }
  .ant-tooltip-inner {
    display: none;
  }
  .ant-upload-list-item-error {
    border-color: #e5ebf3;
  }
  .uploadimage-send {
    width: 217px;
    height: 45px;
    color: white;
    background-color: blue;
    margin-top: 6px;
    border-radius: 100px;
  }
  .ant-upload.ant-upload-select.ant-upload-select-picture-card.ant-upload-rtl {
    display: contents;
  }

  .uplodeimage {
    color: white;
  }

  .frequency {
    float: left;
    margin-top: -106px;
    width: 243px;
    margin-inline-end: 25px;
  } */
`;
export const FormContener = styled.div`
  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 100%;
    border-color: #ffd17e;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.7rem;
    text-align: center;

    color: #0f0743;

    height: 63px;
    margin: 6px 0px;
  }

  .problem {
    margin-top: 25px;
    font-weight: 500;
    font-size: 1.5rem;
    color: #485464;
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

  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  .ant-form {
    width: 100%;
  }
  .Lable {
    color: #0f0743;
    text-align: start;
    font-weight: 300;
    font-size: 1.6rem;
  }
  .ant-badge-status-text {
    color: #0f0743;
    font-size: 1.7rem;
    font-weight: 500;
  }
  .ant-upload {
    width: 100% !important;
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    margin: 0px auto;
    padding: 20px 0;
    width: 84%;
    display: flex;
    // background: grey;
    height: calc(100vh - 60px);

    flex-direction: column;
    align-items: center;

    .ant-form {
      width: 100%;
    }

    .select_half_div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 3rem;
    }

    .select_half_2 {
      width: 44%;
    }

    .ant-picker {
      border-radius: 11px !important;
      height: 55px !important;
      align-items: center !important;
      font-size: 1.7rem;
      font-weight: 500;
      border: 1px solid #d6e2f1;
      box-sizing: border-box;
      border-color: none;
      margin: 0 0;
      padding: 0 25px;
      width: 100%;
    }
    .ant-picker-focused {
      border-color: #40a9ff !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .goback {
      align-self: flex-start;
      font-size: 3.5rem;
    }
  }
  @media only screen and (min-width: 600px) {
    width: 350px;
    margin: 20px auto;
    .goback {
      align-self: flex-start;
      font-size: 47px;
    }
  }

  .theproblemis {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 300;
    font-size: 1.6rem;
  }
  .iconproblem {
    width: 60px;
    height: 60px;
  }
  .textbloon {
    width: 100%;
    position: relative;
  }
  .close_addimg {
    align-self: flex-start;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
    text-align: right;
  }
  .ant-upload-list-picture-card-container {
    width: 30%;
  }

  @media only screen and (max-width: 600px) {
    .GoBackLink {
      color: black;

      align-self: flex-start;
      width: 100px;
    }
    .Sendedmassege {
      margin: 20px 10%;
      width: 80%;
    }
  }
  .tnx1 {
    font-weight: bold;
    font-size: 2.4rem;
    text-align: center;

    color: #1c1547;
  }
  .tnx2 {
    font-weight: normal;
    font-size: 1.3rem;
    text-align: center;

    color: #1c1547;
  }
  @media only screen and (min-width: 600px) {
    .Sendedmassege {
      margin: 20px 20%;
      width: 60%;
    }
    .GoBackLink {
      color: black;

      align-self: flex-start;
      margin-inline-start: -50%;

      margin-top: -18%;
    }
  }
  .avaterpopup {
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid white;
    border-bottom: 13px solid transparent;
    display: contents;
  }
  .ant-upload-picture-card-wrapper {
    margin-top: ${(props) => (props.sendbutton ? "50px" : "100px")};
  }
  .add_image {
    position: absolute;
    margin-top: 0px !important;
    top: 50px;
  }

  .uploadimage {
    margin-top: 70px;
    width: 100%;
    height: 63px;
    background: #ffd17e;
    border-radius: 11px;
    color: #0f0743;
    font-weight: bold;
    font-size: 1.7rem;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .camraicon {
    color: #0f0743;
    font-size: 3.5rem;
    margin-inline-end: 15px;
  }
  .ant-upload-list {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .ant-upload-list-item-error {
    border-color: white;
  }
  .ant-tooltip {
    visibility: collapse;
  }
  .ant-tooltip-inner {
    display: none;
  }
  .ant-upload-list-item-error {
    border-color: #e5ebf3;
  }
  .uploadimage-send {
    width: 217px;
    height: 45px;
    color: white;
    background-color: blue;
    margin-top: 6px;
    border-radius: 100px;
  }
  .ant-upload.ant-upload-select.ant-upload-select-picture-card.ant-upload-rtl {
    display: contents;
  }

  .uplodeimage {
    color: white;
  }

  .frequency {
    float: left;
    margin-top: -106px;
    width: 243px;
    margin-inline-end: 25px;
  }
  .ant-modal-close-x {
    display: none;
  }

  // iphune screen
`;
export const ModalEdit = styled(Modal)`
  max-height: 85vh;
  margin-top: -30px;

  .ant-modal-content {
    border-radius: 19px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  .div_modal_edit::-webkit-scrollbar {
    width: 15px;
    border-radius: 40px;
  }

  .div_modal_edit::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px black;
    border-radius: 40px;
  }

  .div_modal_edit::-webkit-scrollbar-thumb {
    background: rgba(228, 237, 237, 0.71);
    border-radius: 40px;
  }

  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 70%;
    border-color: #ffd17e;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.7rem;
    text-align: center;
    color: #0f0743;
    height: 55px;
  }

  .problem {
    font-weight: 500;
    font-size: 1.5rem;
    color: #485464;
    width: 46%;
  }
  .div_btn_send {
    width: 100%;
    display: flex;
    justify-content: space-between;
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

  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
  }
  // .ant-form {
  //   width: 100%;
  // }
  .Lable {
    color: #0f0743;
    text-align: start;
    font-weight: 300;
    font-size: 1.6rem;
  }
  .ant-badge-status-text {
    color: #0f0743;
    font-size: 1.7rem;
    font-weight: 500;
  }
  .ant-upload {
    width: 100% !important;
  }
  .select_half_2 {
    width: 46%;
  }
  .div_form_edit {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding: 0px 5% 5% 5%;
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    margin: 0px auto;
    padding: 20px 0;
    width: 84%;
    display: flex;
    // background: grey;
    height: calc(100vh - 60px);

    flex-direction: column;
    align-items: center;

    .ant-form {
      width: 100%;
    }

    .select_half_div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 3rem;
    }

    .select_half_2 {
      width: 44%;
    }

    .ant-picker {
      border-radius: 11px !important;
      height: 55px !important;
      align-items: center !important;
      font-size: 1.7rem;
      font-weight: 500;
      border: 1px solid #d6e2f1;
      box-sizing: border-box;
      border-color: none;
      margin: 0 0;
      padding: 0 25px;
      width: 100%;
    }
    .ant-picker-focused {
      border-color: #40a9ff !important;
    }
  }
  .goback {
    background: black;
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    align-self: flex-start;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .theproblemis {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 300;
    font-size: 1.6rem;
  }
  .iconproblem {
    width: 60px;
    height: 60px;
  }
  .textbloon {
    width: 100%;
    position: relative;
  }
  .close_addimg {
    align-self: flex-start;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
    text-align: right;
  }
  .ant-upload-list-picture-card-container {
    width: 30%;
  }

  @media only screen and (max-width: 600px) {
    .GoBackLink {
      color: black;

      align-self: flex-start;
      width: 100px;
    }
    .Sendedmassege {
      margin: 20px 10%;
      width: 80%;
    }
  }
  .tnx1 {
    font-weight: bold;
    font-size: 2.4rem;
    text-align: center;

    color: #1c1547;
  }
  .tnx2 {
    font-weight: normal;
    font-size: 1.3rem;
    text-align: center;

    color: #1c1547;
  }
  @media only screen and (min-width: 600px) {
    .Sendedmassege {
      margin: 20px 20%;
      width: 60%;
    }
    .GoBackLink {
      color: black;

      align-self: flex-start;
      margin-inline-start: -50%;

      margin-top: -18%;
    }
  }
  .avaterpopup {
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid white;
    border-bottom: 13px solid transparent;
    display: contents;
  }
  .ant-upload-picture-card-wrapper {
    margin-top: ${(props) => (props.sendbutton ? "50px" : "100px")};
  }
  .add_image {
    position: absolute;
    margin-top: 0px !important;
    top: 50px;
  }

  .uploadimage {
    // background: #ffd17e;
    width: 70%;
    border: 1px solid #d6e2f1;
    padding: 30px 30px;
    border-radius: 11px;
    color: #0f0743;
    font-weight: bold;
    font-size: 1.7rem;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    margin: 0 auto;
  }
  input[type="file"] {
    display: none;
  }
  .camraicon {
    color: #0f0743;
    font-size: 3.5rem;
    cursor: pointer;
  }
  .ant-upload-list {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .ant-upload-list-item-error {
    border-color: white;
  }
  .ant-tooltip {
    visibility: collapse;
  }
  .ant-tooltip-inner {
    display: none;
  }
  .ant-upload-list-item-error {
    border-color: #e5ebf3;
  }
  .uploadimage-send {
    width: 217px;
    height: 45px;
    color: white;
    background-color: blue;
    margin-top: 6px;
    border-radius: 100px;
  }
  .ant-upload.ant-upload-select.ant-upload-select-picture-card.ant-upload-rtl {
    display: contents;
  }

  .uplodeimage {
    color: white;
  }

  .frequency {
    float: left;
    margin-top: -106px;
    width: 243px;
    margin-inline-end: 25px;
  }
  .div_img {
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  // iphune screen
`;

export const Buttonsenimage = styled.div`
  .ant-btn {
    margin-top: 70px;
    width: 100%;
    height: 63px;
    border-radius: 11px;
    color: #0f0743;
    font-weight: bold;
    font-size: 1.7rem;
    border: 1px solid;
    align-items: center;
    display: flex;
    justify-content: center;

    background: ${(props) => (props.Buttonsecses ? "white" : "#ffd17e")};

    border-color: ${(props) => (props.Buttonsecses ? "#0f0743" : "#ffd17e")};
  }
`;
