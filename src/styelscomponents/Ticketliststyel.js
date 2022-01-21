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

  .MangerButton {
    border:  1px solid #0F0743; !important;
    box-sizing: border-box;
    border-radius: 11px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    width: 24%;
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
.closecheckboox {
  display:none;
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
// .pointerblock {

// margin: 0 10px;
// width: 80px;
// height: 25px;
// background: #e5ebf3;
// font-weight: 500;
// font-size: 1.2rem;
//  color: #0f0743;
//  display:flex;
//  align-items: center;
//   justify-content: center;
//   padding-top:1px;}


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
    border:  1px solid #D6E2F1; !important;
    box-sizing: border-box;
    border-radius: 11px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    width: 41%;
    height: 55px;
    color: #0f0743;
    font-size: 1.7rem;
    font-weight: 500;
    margin-inline-end: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;

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
  
  .closecheckboox {
    display:none;
  }
  .Smallcard {
    display: flex;
    width: 100%;
    justify-content: space-between
  }
  

  .Closepopup {
    width: 100%;
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
  .closecheckboox {
    position: absolute;
    top: 9px;
    inset-inline-start: 282px;
  }
}


`;
export const Selectfilter = styled.div`
  margin-top: 10px;
  .ant-select {
    width: 200px;
    border-color: none;
    margin-bottom: 3px;
    box-sizing: border-box;
    border-radius: 11px;
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
  }
`;

export const Quickclomodaltyle = styled(Modal)`
  font-family: "Heebo";
`;
export const QuickcloDrawerstyle = styled(Drawer)`
  font-family: "Heebo";
`;
export const Drawerstyle = styled(Drawer)`
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
export const StyeldSelect = styled(Select)`
  width: 97px;
  height: 24px;
  margin-top: -4%;
  background: #e5ebf3;
  margin-inline-start: 10%;
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

    border: none !important;
    box-shadow: none !important;
  }

  .ant-card-extra {
    /* margin-right: -14px; */
  }
`;
