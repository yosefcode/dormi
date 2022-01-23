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
    }
  }
`;
export const FormContenerdesktop = styled.div`
  /* word-wrap: break-word; */
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
  .flexposition {
    flex-grow: 2;
    margin-left: 4px;
    margin-right: 4px;

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
      margin-right: 17%;
      margin-top: -3%;
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
  .avaterpopup {
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid white;
    border-bottom: 13px solid transparent;
    display: contents;
  }
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
    width: 269px;
    height: 34px;
    border-color: #ffd17e;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
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
  }

  @media only screen and (max-width: 600px) {
    position: fixed;
    left: 8%;
    padding: 40px 0;
    width: 84%;
    display: flex;
    // background: grey;
    height: calc(100vh - 60px);

    flex-direction: column;
    align-items: center;

    .ant-form {
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    .goback {
      align-self: flex-start;
      font-size: 3.5rem;
    }
  }
  @media only screen and (min-width: 600px) {
    .goback {
      align-self: flex-start;
      font-size: 47px;
      margin-right: 17%;
      margin-top: -3%;
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
    width: 274px;
    margin-top: -34px;
  }

  @media only screen and (max-width: 600px) {
    .GoBackLink {
      color: black;

      align-self: flex-start;
      width: 100px;
    }
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
  }

  // iphune screen
`;

export const Buttonsenimage = styled.div`
  .ant-btn {
    margin-top: 5%;
    width: 258px;
    height: 63px;
    left: 1px;
    top: -7px;
    background: ${(props) => (props.Buttonsecses ? "white" : "#ffd17e")};

    height: 50px;

    border-radius: 11px;
    color: #0f0743;

    font-weight: bold;
    font-size: 17px;
    border-color: ${(props) => (props.Buttonsecses ? "#0f0743" : "#ffd17e")};
  }
`;
