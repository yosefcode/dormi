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
  .shwobuttondropdown {
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
     padding: 0;}

     #displyid{
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
  align-items: center;
}
#description{
  font-size: 1.7rem;
font-weight: 700;
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

.details {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
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


`;
