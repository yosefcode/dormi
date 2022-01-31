import styled from "styled-components";
import { Form } from "antd";

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
  .div_MangerButton {
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
  .shwobuttondropdown {
    display: none;
  }
  #number_inquiries {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    height: 40px;
    margin-bottom: 0;
  }
  .ant-card {
    width: 100%;
    padding: 20px;
    margin: 5px 0;
    background: #ffffff;
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
  }
  .ant-card-body {
    padding: 0;
  }

  #displyid {
    color: #807e94;
    font-size: 1.2rem;
  }
  .smallscreen {
    display: none;
  }
  .inquir {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #description {
    font-size: 1.7rem;
    font-weight: 700;
    color: #0f0743;
    margin-bottom: 0;
  }
  .closecheckboox {
    display: none;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .task_todo {
    height: 25px;
    background: #ffd17e;
    font-weight: 500;
    font-size: 1.2rem;
    color: #0f0743;
    margin-top: -3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .action_inquir {
    height: 20px;
    width: 35px;
    color: #807e94;
  }
  .ant-badge-status-text {
    font-weight: 500;
    font-size: 1.2rem;
    color: #0f0743;
  }

  .details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;
    font-size: 1.2rem;
    color: #807e94;
  }
  .Calltoaction {
    cursor: pointer;
    text-decoration: underline;
  }
  p {
    margin-bottom: 0 !important;
  }
  #phoneactionbutton {
    display: none;
  }

  .user{
    width: 80%;
    margin: 20px 0 0 0;
    font-size: 2.4rem;
    font-weight: 700;
    font-family: "Heebo";
    color: #0f0743;
    text-align: right;
    padding: 0 0 50px;
  
  }
  .ant-switch-checked{
    background-color: #1c1547;
  }

  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 300px;
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
    margin: 50px 0px;
  }

  .div_setting {
    margin-top: 25px;
    color: #485464;
    width: 100%;
  }
  label {
    font-weight: 600;
    font-size: 1.6rem !important;
  }

  .text_bottom {
    font-weight: 500;
    font-size: 1.3rem;
    color: #807e94;
  }
  .ant-select-selector {
    border: 1px solid #d6e2f1;
    box-sizing: border-box;
    border-radius: 11px;
    border-color: none;
  }
  .ant-select {
    width: 300px;
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
    width: 300px;
    height:55px;

  }
  .ant-form {
    width: 100%;
  }

  .gobacklink {
    font-weight: 500;
    font-size: 1.5rem;
    color: #485464;
    text-decoration: underline;
    display:flex;
    align-items: flex-end;
    margin-bottom:25px;
  }
.nutificationstatus{
  display: flex;
    align-items: center;
    margin-top:25px;
    font-weight: 600;
    font-size: 1.5rem;
    justify-content: space-between;
  }
.user_active{
  display: flex;
    align-items: center;
    margin-top:25px;
    font-weight: 600;
    font-size: 1.6rem;
    align-items: center;
    margin-bottom: 32px;


  }
  
  .mail_sms{
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0 25px 0 0;

}
.mail_sms .ant-form-item {
margin:0px 7px 0 35px !important;}
.user_active .ant-form-item {
margin:0px 25px 0 35px !important;}

  @media only screen and (max-width: 600px) {
   .user{ 
      width: 100%;
    padding: 20px 0;
  margin:0;}

    .ant-form {
      width: 100%;
    }
    .ant-select {
      width: 100%;
    }
    .ant-input {
      width: 100%;}
  
    button.ant-btn.ant-btn-primary {
      width: 100%;
    }
    .nutificationstatus{
      display: block;}
      .mail_sms{
        margin: 5px 0;}
    
  }

`;
