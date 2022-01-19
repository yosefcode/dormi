import { Card } from "antd";

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

  .hader {
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

  .btn_add_location {
    border:  1px solid #0F0743; !important;
    box-sizing: border-box;
    border-radius: 11px;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    width: 150px;
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
  .listofcards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;    position: relative;
    margin-top:20px;
  }
  .card{width: 30%;}

  .categoriicon {
    color: #0f0743;
    font-size:2rem;
    margin:0 0 -3px 5px
  }
  .icon_dropdown{
    transform: rotate(90deg);
    height: 20px;
    width: 35px;
    color:#807E94;
    margin-left: -15px;
    cursor: pointer;
    
  }
  .btn_footer_card {
    width: 100%;
    background: red;
    margin-bottom: 30px;
    display: flex;
align-items: center;
justify-content: center;
height: 42px;
background: #D6E2F1;
border-radius: 0px 0px 11px 11px;
font-weight: bold;
font-size: 1.5rem;
color: #0F0743;
cursor: pointer;
border:none;

  }

`;

export const CardStyeld = styled(Card)`
  width: 100%;
  height: 267px;
  margin: 30px 0 0 0;
  background: #ffffff;
  border-radius: 11px 11px 0px 0px;
  border: 1px solid #d6e2f1;

  .ant-card-head {
    background-color: #fff;
    border-radius: 11px 11px 0px 0px;

    text-align: start;
  }
  .ant-card-head-title {
    font-weight: bold;
    font-size: 1.7rem;
    color: #0f0743;
  }

  .ant-card-body {
    border-top: 1px solid #d6e2f1;
    padding: 14px 22px 0 0;
    overflow-y: auto;
    text-align: start;
    height: 208px;
  }

  .ant-card-body::-webkit-scrollbar {
    width: 10px;
  }

  .ant-card-body::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 2px grey;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.36);
  }

  .ant-card-body::-webkit-scrollbar-thumb {
    background: #d6e2f1;
    border-radius: 10px;
  }

  .listodors {
    display: flex;

    flex-direction: column;
  }
  .singellocation {
    display: grid;
    grid-template-columns: 68% 15% 17%;
    font-weight: 400;
    font-size: 1.5rem;
    color: #0f0743;

    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #icon_dropdown_body {
    text-align: left;
    width: 25px;
  }
  .internaldots {
    color: gray;
  }
  .div_count {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 18px;
    background: rgba(0, 0, 0, 0.36);
    color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    // margin: -1px 5px 0 0;
    padding-top: 1px;
  }
  .noroms {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
`;
