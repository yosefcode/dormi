import styled from "styled-components";
import { Drawer, Select, Modal } from "antd";
import { BsCheck } from "react-icons/bs";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-family: "Heebo";
  width: 84%;
  margin: 0 auto;

  .Mangeroption {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    font-size: 3rem;
    position: relative;
    font-weight: 300;
  }
  .div_MangerButton{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 60%;
  }

  .MangerButton_exel {
    border: 1px solid rgb(214, 226, 241);
    box-sizing: border-box;
    border-radius: 11px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    width: 100%;
    height: 55px;
    color: #0f0743;
    font-size: 1.5rem;
    font-weight: 500;
    margin-inline-end: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    background:white;

  }
  .shwobuttondropdown_header {
    display: none;
  }
  #number_inquiries{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    height: 40px;
    margin-bottom:0;
  }

  .ant-card {
    width: 100%;
padding: 20px;
margin: 5px 0;
background: #FFFFFF;
border: 1px solid #D6E2F1;
box-sizing: border-box;
border-radius: 11px;
  }
  .card_checked_border.ant-card {
border: 1px solid #FFD17E;
cursor: pointer;
  }
  .card_checked_pointer.ant-card {
cursor: pointer;
  }
  .ant-card-body {
    height:100%;
     padding: 0;}

     #displyid_desktop{
       color: #807E94;
       font-size: 1.2rem;
     }
     .smallscreen {
      display: none;
    }
.inquir{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
#description{
  font-size: 1.7rem;
font-weight: 700;
  color: #0F0743;
  margin-bottom: 0;

}
#cooment{
  font-size: 1.4rem;
font-weight: 400;
  color: #0F0743;
  margin-bottom: 0;

}
.Smallcard {
  display: flex;
}
.valueBadge {
  height: 25px;
  background: #e5ebf3;
  font-weight: 500;
  font-size: 1.2rem;
   color: #0f0743;
   display:flex;
   align-items: center;
    justify-content: center;
}
.task_todo{
  height: 25px;
  background: #FFD17E;
  font-weight: 500;
  font-size: 1.2rem;
   color: #0f0743;
   margin-top:-3px;
   display:flex;
   align-items: center;
    justify-content: space-between;
    padding: 0 10px
}
.action_inquir{
  height: 20px;
width: 35px;
color:#807E94;
}
.ant-badge-status-text {
  font-weight: 500;
  font-size: 1.2rem;
  color: #0f0743;
}
.marginRight{
  margin-right:25px;
}

#displyid_mobile{
  display:none;
}

.details {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 1.3rem;
  color: #807E94;
}
.Calltoaction{
  cursor: pointer;
  text-decoration: underline;
}
p{
  margin-bottom:0 !important;

}
#phoneactionbutton {
  display: none;
}

.Closepopup {
  width: 35%;
  border-radius: 43px;
  position: fixed;
  bottom: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 30px;
  background-color: rgba(15, 7, 67, 1);
  height: 63px;
  color: white;
  left:24%;
}


.Closepopupsubmit {
  width: 40%;
  height: 47px;
  background: #ffffff;
  border-radius: 11px;
  font-weight: bold;
  font-size: 1.7rem;
  text-align: center;
  color: #0f0743;
  border:none;

}

.cancelClosep {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 118.88%;

  text-align: center;
  text-decoration-line: underline;

  color: #ffffff;
  background: none;
  border: none;
}

.Closepopup-numbertasks {
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
}
.closecheckboox {
  -webkit-appearance: none;
}

.closecheckboox:checked {
  content: url("/images/Vector.svg");
  align-items: center;
  padding: 4px;
  width: 25px;
  height: 25px;
  background: #ffd17e;
  border: 1.52px solid #ffd17e;
  box-sizing: border-box;
  border-radius: 76px;
}

.closecheckboox {
  position: absolute;
  bottom: 12px;
  left:20px;
}


@media only screen and (max-width: 600px) {
  .Mangeroption {
    display: block;
    // flex-wrap: nowrap;
    // justify-content: space-between;
    // align-items: center;
    margin-top: 20px;
    width: 100%;
    font-size: 2.4rem;
    position: relative;
    font-weight: 700;
  }
  .div_MangerButton{
    margin-top: 20px;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }

  .MangerButton {
    width: 41%;
  }
  .DropdownButton {
    border:  1px solid #D6E2F1; !important;
    box-sizing: border-box;
    border-radius: 11px;
    width: 12%;
    height: 55px;
    display:flex;
    align-items: center;
    background-color: white;
    position: relative;
    font-size:2.5rem;
    justify-content: center;
  }

  .shwobutton {
    display: none;
  }


  #number_inquiries{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.7rem;
    font-weight:500;
    height: auto;
    margin: 25px auto 0;
  }

  .ant-card {
    width: 100%;
    padding:12px 20px;
  }

  .div_card {
    height:80px;

  }
  #displyid_desktop{
    display: none;
  }


  #desktopactionbutton {
    display: none;
  }


  .inquir{
    width: 100%;
    display:flex;
    height:100%;
    flex-direction: column
  }

  #description{
    font-size: 1.7rem;
  font-weight: 700;
    color: #0F0743;
    margin-bottom: 0;
  
  }

  #cooment{
    font-size: 1.4rem;
  font-weight: 400;
    color: #0F0743;
    margin-bottom: 0;
  
  }
  
  .Smallcard {
    display: flex;
    width: 100%;
    justify-content: space-between
  }
  

  #discriptun {
    margin-inline-end: -15px;
    margin-inline-start: 4px;
  }
  .fullscreen {
    display: none;
  }

  .action_inquir{
display:none;}

.action_inquir_mobile{
  position:absolute;
  left:5px;
bottom:10px;
border:none;
background:none;
font-size:1.6rem;

}
  .smallscreen {
    display: inherit;
  }

  .details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
        font-weight: 500;
    font-size: 1.3rem;
    color: #807E94;
    line-height: 30px;

  }
  .marginRight{
    margin-right:0px;
  }

  #displyid_mobile{
    display:inherit;
    margin-right:30px;
  }
  
  .date_mobile{
    display:flex;
  }
  
  .Calltoaction{
    cursor: pointer;
    text-decoration: underline;
  }
  
  .discriptun {
    display: flex;
    flex-direction: column;
  }

  .Closepopup {
    width: 100%;
    border-radius: 0px;
    position: fixed;
    bottom: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 25px;
    background-color: rgba(15, 7, 67, 1);
    height: 63px;
    color: white;
    left:0;
    z-index:2000;
  }
  
  
  .Closepopupsubmit {
    width: 50%;
    height: 47px;
    background: #ffffff;
    border-radius: 11px;
    font-weight: bold;
    font-size: 1.7rem;
    text-align: center;
    color: #0f0743;
    border:none;
  }
  
  .cancelClosep {
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 118.88%;
  
    text-align: center;
    text-decoration-line: underline;
  
    color: #ffffff;
    background: none;
    border: none;
  }
  
  .Closepopup-numbertasks {
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
  }
  .closecheckboox {
    -webkit-appearance: none;
  }
  
  .closecheckboox:checked {
    content: url("/images/Vector.svg");
    align-items: center;
    padding: 3px;
    width: 22px;
    height: 22px;
    background: #ffd17e;
    border: 1.52px solid #ffd17e;
    box-sizing: border-box;
    border-radius: 76px;
  }
  
  .closecheckboox {
    position: absolute;
    top: 12px;
    left:15px;
  }

  
}


`;
export const Selectfilter = styled.div`
  width: 100%;

  .div_filter_inq {
    width: 100%;
    padding: 20px;
    margin: 30px 0;
    background: #ffffff;
    border: 1px solid #d6e2f1;
    border-radius: 11px;
  }

  .div_filter_users {
    width: 100%;
    margin: 25px auto 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .div_Select_users {
    width: 47%;
  }

  @media only screen and (max-width: 600px) {
    .div_filter_users {
      width: 100%;
      height: 130px;
      margin: 5px auto 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .div_Select_users {
      width: 100%;
    }
  }

  .ant-drawer-header {
    display: none;
  }

  .filteroption {
    width: 95%;
    margin: 0 auto;
  }

  .header_filter {
    width: 100%;
    font-weight: 500;
    font-size: 1.9rem;
    color: #0f0743;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  #filterform {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .clearbutton {
    background: none;
    color: #0f0743;
    border: none;
    font-size: 1.4rem;
    text-decoration: underline;
    cursor: pointer;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
    width: 100%;
  }

  .ant-select-selection-item {
    align-items: center !important;
    display: flex !important;
  }

  .ant-select {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
    width: 100% !important;
  }

  .selcts {
    margin-top: 25px;
    font-weight: 500;
    font-size: 1.5rem;
    color: #485464;
    width: 30%;
  }
  .ant-form-item {
    width: 100%;
    margin-bottom: 0px;
  }

  .ant-drawer-content {
    border-radius: 24px 24px 0px 0px;
  }

  .btn_filter {
    width: 100%;
    margin: 35px 0 15px;
    display: flex;
    justify-content: space-around;
  }

  .ok {
    width: 35%;
    height: 55px;
    color: white;
    background: #0f0743;
    border-radius: 11px;
    border: none;
    font-weight: 500;
    font-size: 1.7rem;
    cursor: pointer;
  }
  .cancel {
    width: 35%;
    height: 55px;
    color: #0f0743;
    background: #e5ebf3;
    border-radius: 11px;
    border: none;
    font-weight: bold;
    font-size: 1.7rem;
    cursor: pointer;
  }
`;

export const DrawerCloseTask = styled(Drawer)`
  .continer_formedittask {
    width: 100%;
    font-weight: 700;
    font-size: 2.2rem;
    text-align: center;
  }

  .formedittask {
    width: 100%;
  }
  .edittask {
    width: 100%;
    margin-top: 25px;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: right;
  }

  .ant-select {
    margin: 0px auto !important;
    width: 100%;
  }
  .ant-input {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    width: 100%;
    min-height: 55px;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
  }

  .ant-modal-body {
    width: 100%;
  }
  .modalbutoonsend {
    background: #ffd17e;
    border-radius: 11px;
    width: 80%;
    height: 40px;
    border-color: #ffd17e;
    font-size: 2.2rem;
    font-weight: bold;
    margin: 30px 10% 0;
    border: none;
  }
  .ant-upload-list {
    margin: 20px auto;
    text-align: center;
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
  .ant-drawer-content {
    border-radius: 24px 24px 0px 0px;
  }
`;
export const Drawerstyle = styled(Drawer)`
  .ant-drawer-header {
    display: none;
  }

  .filteroption {
    width: 95%;
    margin: 0 auto;
  }

  .header_filter {
    width: 100%;
    font-weight: 500;
    font-size: 1.9rem;
    color: #0f0743;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .clearbutton {
    background: none;
    color: #0f0743;
    border: none;
    font-size: 1.4rem;
    text-decoration: underline;
  }

  .ant-select-selector {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
    width: 100%;
  }

  .ant-select-selection-item {
    align-items: center !important;
    display: flex !important;
  }

  .ant-select {
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 55px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
    width: 100% !important;
  }

  .selcts {
    margin-top: 25px;
    font-weight: 500;
    font-size: 1.5rem;
    color: #485464;
  }
  .ant-form-item {
    width: 100%;
    margin-bottom: 0px;
  }

  .ant-drawer-content {
    border-radius: 24px 24px 0px 0px;
  }

  .btn_filter {
    width: 100%;
    margin: 35px 0;
    display: flex;
    justify-content: space-between;
  }

  .ok {
    width: 47%;
    height: 63px;
    color: white;
    background: #0f0743;
    border-radius: 11px;
    border: none;
    font-weight: 500;
    font-size: 1.7rem;
  }
  .cancel {
    width: 47%;
    height: 63px;
    color: #0f0743;
    background: #e5ebf3;
    border-radius: 11px;
    border: none;
    font-weight: bold;
    font-size: 1.7rem;
  }
`;
export const StyeldSelect = styled(Select)`
  width: 97px;
  height: 24px;
  margin: -4% 10px 0 0;

  .ant-badge-status-text {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;

    color: #0f0743;
    margin-inline-start: 2.2px;
  }
  .ant-badge-status-dot {
    top: 0px;
    margin-inline-start: 2px;
  }
  .ant-select-selector {
    pointer-events: ${(props) =>
      props.permission ? "auto" : "none"}!important;
    // background: #e5ebf3 !important;
    border: none !important;
    box-shadow: none !important;
    // width: 97px;
    // height: 24px !important;
    // font-weight: 500 !important;
    // font-size: 1.2rem !important;
    // color: #0f0743 !important;
    // display: flex !important;
    // align-items: center !important;
    // justify-content: center !important;
    // text-align: center !important;
  }
  span.ant-select-selection-item {
    text-align: center !important;
    font-weight: 500 !important;
    font-size: 1.2rem !important;
    color: #0f0743 !important;
  }
  .ant-card-extra {
    /* margin-right: -14px; */
  }
`;

export const Quickclomodaltyle = styled(Modal)`
  font-family: "Heebo";
  .userQuickclosebuuton {
    display: flex;
    flex-direction: column;

    margin-top: 21%;
  }
  .listQuickclosebuuton {
    display: flex;
    flex-direction: column;

    margin-top: 21%;
  }
  .ant-modal-content {
    /* background-color: transparent; */
    /* width: 0px; */
  }
  .Quickclosebuutdownclose {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 100%;
    height: 56px;

    color: #0f0743;
  }

  .Quickclosebuutonup {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    padding: 16px 15px 16px 0px;
    width: 100%;
    height: 56px;
    border-radius: 24px 24px 0px 0px;
    text-align: start;

    color: #0f0743;
  }
  .Quickclosebuutdown {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;
    /* identical to box height */
    border-radius: 0px 0px 24px 24px;

    text-align: start;

    color: #f71919;
  }
  .Quickclosebuuton {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    width: 310px;
    height: 56px;
    /* identical to box height */

    text-align: start;

    color: #0f0743;
  }

  .Closepopup {
    position: fixed;
    bottom: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 30px;
    background-color: rgba(15, 7, 67, 1);
    color: white;
    width: 100%;
    height: 63px;
  }

  .Closepopupsubmit {
    padding: 0px 12px 0px 20px;

    width: 165px;
    height: 47px;

    background: #ffffff;
    border-radius: 11px;
    font-weight: bold;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;
    content: url("/images/lightning.svg");
    color: #0f0743;

    /* Inside Auto Layout */
  }
  .cancelClosep {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;
    text-decoration-line: underline;

    color: #ffffff;
    background: none;
    border: none;
  }
  .Closepopup-numbertasks {
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;

    color: #ffffff;
  }
  .clearbutton {
    background: none;
    color: #0f0743;
    border: none;
    margin-inline-start: 75%;
    margin-bottom: 5%;

    font-weight: 500;
    font-size: 14px;
    text-decoration: underline;
  }
  .drower_checklist {
    width: 100%;
  }

  .ant-modal-body {
    padding: 0 !important;
  }
  .ant-modal-content {
    border-radius: 15px;
  }
  .ant-modal-close {
    display: none;
  }
  .drower_button {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 1.6rem;
    width: 100%;
    height: 56px;
    color: #0f0743;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .btn_cancel {
    border-radius: 9px;
    padding: 0px 20px;
  }

  .btn_up {
    border-radius: 9px 9px 0px 0px;
  }

  .btn_down {
    border-radius: 0px 0px 9px 9px;
  }
  .img_icon {
    margin: 0px 17px;
  }
  button.ant-drawer-close {
    display: none;
  }
`;
export const QuickcloDrawerstyle = styled(Drawer)`
  font-family: "Heebo";

  .userQuickclosebuuton {
    display: flex;
    flex-direction: column;
    margin-top: 73%;
  }
  .listQuickclosebuuton {
    display: flex;
    flex-direction: column;
  }
  .ant-drawer-content {
    background-color: transparent;
  }

  .drower_checklist {
    width: 100%;
  }

  .drower_button {
    border: none;
    background: #fafcff;
    box-shadow: 0px 1px 0px rgba(171, 171, 171, 0.25);
    margin: 1px;
    font-weight: 500;
    font-size: 1.6rem;
    width: 100%;
    height: 56px;
    color: #0f0743;
    display: flex;
    align-items: center;
  }
  .btn_cancel {
    border-radius: 9px;
    padding: 0px 20px;
  }

  .btn_up {
    border-radius: 9px 9px 0px 0px;
  }

  .btn_down {
    border-radius: 0px 0px 9px 9px;
  }
  .img_icon {
    margin: 0px 17px;
  }
  button.ant-drawer-close {
    display: none;
  }

  // .Closepopup {
  //   position: fixed;
  //   bottom: 1px;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 8px 30px;
  //   background-color: rgba(15, 7, 67, 1);
  //   color: white;
  //   width: 100%;
  //   height: 63px;
  //   left: 0;
  // }

  .Closepopupsubmit {
    padding: 0px 12px 0px 20px;

    width: 165px;
    height: 47px;

    background: #ffffff;
    border-radius: 11px;
    font-weight: bold;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;
    content: url("/images/lightning.svg");
    color: #0f0743;

    /* Inside Auto Layout */
  }
  .cancelClosep {
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;
    text-decoration-line: underline;

    color: #ffffff;
    background: none;
    border: none;
  }
  .Closepopup-numbertasks {
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 118.88%;
    /* or 20px */

    text-align: center;

    color: #ffffff;
  }
  .clearbutton {
    background: none;
    color: #0f0743;
    border: none;
    margin-inline-start: 75%;
    margin-bottom: 5%;

    font-weight: 500;
    font-size: 14px;
    text-decoration: underline;
  }
`;
