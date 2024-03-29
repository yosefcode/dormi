import styled from "styled-components";

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

  .Mangeroption_users {
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

  .div_MangerButton_users {
    display: flex;
    flex-wrap: nowrap;
    justify-content: end;
    width: 60%;
  }

  .MangerButton {
margin: 0 2% 0 0;  }

  .haderflex {
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
     padding: 0;
    }
.yuser_name{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#yuser_name{
    font-size: 1.7rem;
  font-weight: 700;
    color: #0F0743;
    margin-bottom: 0;
  
  }

  .status_yuser_name{
    display: flex;
    align-items: center;
    justify-content: flex-end
width: 50%;
  }

  .level_neme {
    margin: 0 10px;
    width: 80px;
    height: 25px;
    background: #e5ebf3;
    font-weight: 500;
    font-size: 1.2rem;
     color: #0f0743;
     display:flex;
     align-items: center;
      justify-content: center;
      padding-top:1px;

  }
  .open_inquiries{
    margin: 0 10px;
    width: 120px;
    height: 25px;
    background:#EBBE74;
    padding-top:1px;

    font-weight: 500;
    font-size: 1.2rem;
     color: #0f0743;
     display:flex;
     align-items: center;
      justify-content: center;
// color: white;
cursor: pointer;
  }
  .count_open_inquiries{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 20px;
    background: rgba(255,255,255,0.56);
    // color: white;
    font-size: 1.4rem;
    border-radius: 10px;
    Margin:-1px 5px 0 0;
    padding-top:1px;
    
  }

  .action_yuser_name{
    height: 20px;
  width: 20px;
  color:#807E94;
  cursor: pointer;

  }
  .fullscreen {
    margin-top:15px;
    width: 100%;
  }
  .details {
    width: 100%;
    font-weight: 500;
    font-size: 1.2rem;
      color: #0f0743;
    display: grid;
    grid-template-columns: 30% 20% 17% 17% 16% ;  }

  .Calltoaction {
    text-decoration-line: underline;
    cursor: pointer;
  }
  .ant-badge-status{
    line-height: 0;
  }

  .filtermenue {
    display: flex;
    flex-direction: column;
  }
  .action {
    border: none;
    position: absolute;
    left: 10px;

    background: none;
  }
  @media only screen and (min-width: 600px) {
    .Smallcard {
      background-color: red;
    }
    .smallscreen {
      display: none;
    }
    .action {
      bottom: 69%;
    }
   }
  @media only screen and (max-width: 600px) {
    .Mangeroption_users {
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
    .div_MangerButton_users{
      margin-top: 20px;
  
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
    }
  
    .MangerButton {
      width: 41%;
      margin:0;
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
      font-size:2.5rem !important;
      justify-content: center;
      padding:0 !important;
    }
  
    .shwobutton {
      display: none;
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
  
    .yuser_name{
      width: 100%;
      display:flex;
      height:100%;
      flex-direction: column;
      align-items: flex-start;
    }
  .status_yuser_name{
    margin-top: 15px;
    display: flex;
    width: 100%;

  }
  .level_neme {
    margin: 0 0 0 10px;}

    #desktopactionbutton {
      display: none;
    }
  
  .action_yuser_name{
    display: none;
  }
  .smallscreen {
    display: inherit;
  }
  .action_inquir_mobile{
    position:absolute;
    inset-inline-end:5px;
  bottom:10px;
  border:none;
  background:none;
  font-size:1.6rem;
  
  }
      .fullscreen {
      display: none;
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
  
    
    .closecheckboox:checked {
      content: url("/images/Vector.svg");
      align-items: center;
      padding: 3px !important;
      width: 22px !important;
      height: 22px !important;
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

  #cooment {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 122.88%;
    color: #0f0743;
  }

  .opentask {
    display: flex;
    margin-inline-start: 13px;
  }

  hr {
    border: 1px solid #e9f0f8;
  }

  @media only screen and (min-width: 600px) {
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
  }
  @media only screen and (max-width: 600px) {
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
      min-width:100%;

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
    }

  // .Closepopupsubmit {
  //   padding: 0px 12px 0px 20px;

  //   width: 165px;
  //   height: 47px;

  //   background: #ffffff;
  //   border-radius: 11px;
  //   font-weight: bold;
  //   font-size: 17px;
  //   line-height: 118.88%;
  //   /* or 20px */

  //   text-align: center;
  //   content: url("/images/lightning.svg");
  //   color: #0f0743;

  //   /* Inside Auto Layout */
  // }
  // .cancelClosep {
  //   font-style: normal;
  //   font-weight: normal;
  //   font-size: 17px;
  //   line-height: 118.88%;
  //   /* or 20px */

  //   text-align: center;
  //   text-decoration-line: underline;

  //   color: #ffffff;
  //   background: none;
  //   border: none;
  // }
  // .Closepopup-numbertasks {
  //   font-style: normal;
  //   font-weight: 300;
  //   font-size: 17px;
  //   line-height: 118.88%;
  //   /* or 20px */

  //   text-align: center;

  //   color: #ffffff;
  // }
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
  .closecheckboox {
    -webkit-appearance: none;
  }
  .closecheckboox {
    position: absolute;
    bottom: 12px;
    left:12px;
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
  
  



  .cardbutton {
    background-color: white;
    border: none;
  }

  .DropdownButton {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    width: 44px;
    height: 55px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    position: relative;
  }

  .shwobutton {
    display: ${(props) => (props.Screnphunesize ? "none" : "inherit")};
  }

  .shwobuttondropdown {
    display: ${(props) =>
      props.Screnphunesize ? "inherit" : "none"}!important;
  }
  // .ant-select {
  //   width: 200px;
  //   margin-top: 10px;

  //   border-color: none;
  //   margin-bottom: 3px;
  //   box-sizing: border-box;
  //   border-radius: 11px;
  // }
  // .ant-select:not(.ant-select-customize-input) .ant-select-selector {
  //   border: 1px solid #d6e2f1;
  //   box-sizing: border-box;
  //   border-radius: 11px;
  //   border-color: none;
  //   margin-bottom: 2px;
  // }
  // .ant-select-selector {
  //   border: 1px solid #d6e2f1;
  //   box-sizing: border-box;
  //   border-radius: 11px;
  //   border-color: none;
  // }
`;
