import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: wrap;
  width: 84%;
  color: rgb(15, 7, 67);

  .ant-form-item-label {
    display: none;
  }

  .ant-select-selector {
    margin-top: 8px;
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 50px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
    width: 100%;
  }
  .ant-input {
    margin-top: 8px;
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 50px !important;
    align-items: center !important;
    font-size: 1.7rem;
    font-weight: 500;
    width: 100%;
  }

  .select_adduser {
    margin-top: 25px;
    font-weight: 500;
    font-size: 1.5rem;
  }
  
  .select_room:focus {
  border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-right-width: 1px;
    outline: 0;
}

  .select_room{
    margin-top: 8px;
    border: 1px solid #d6e2f1;
    border-radius: 11px !important;
    height: 50px !important;
    align-items: center !important;
    font-size: 1.5rem;
    font-weight: 500;
    width: 100%;
  }

  .select_disable   {
height: 80px;
background-color: #ccc;
color: #fff; 
font-size: 1.4rem;
font-weight: 500;
padding: 80px;
 }



    select option:checked {
        background: linear-gradient(#e6f7ff, #e6f7ff);
        background-color: #e6f7ff !important; /* for IE */
        color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    }

    .adduser_modal{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }  

    .msg_modal{
width: 350px;
height: 350px;
background-color: #fff;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 5px solid #ffd17e;
font-size: 20px;
font-weight: 700;
    }

    .img_modal{
      width: 200px;
      height: 200px;
    }
      
.radio_adduser {
    width: 100%;
    margin: 25px 0 0 0;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .ant-form-item {
    margin-bottom: 0 !important;
  }
  .ant-switch-checked {
    background-color: #ffd17e;
  }
  button.ant-btn.ant-btn-primary {
    background: #ffd17e;
    border-radius: 11px;
    width: 100%;
    height: 50px;
    border-color: #ffd17e;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 25px auto;
  }

  @media only screen and (min-width: 600px) {
    margin: 20px auto;

    .display_adduser {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    .select_adduser {
      width: 30%;
      margin: 25px 0 0 3%;
    }

    button.ant-btn.ant-btn-primary {
width: 50%; 
margin:40px 25% 70px;   }

    .hr {
      display: block;
      border-top: 1px solid #d6e2f1;
      width: 100%;
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 90px auto;
  }
  .hader {
    width: 100%;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #0f0743;
  }
  hr {
    display: none;
  }
}
  .goback {
    text-align: right;
    cursor: pointer;
    width:20px;
  }

  // .ant-select-selector {
  //   border: 1px solid #d6e2f1;
  //   border-radius: 11px !important;
  // }

  // .ant-input {
  //   border: 1px solid #d6e2f1;
  //   border-radius: 11px !important;
  // }
  // @media only screen and (max-width: 600px) {
  //   .ant-form {
  //     width: 267px;
  //   }
  // }

  // hr {
  //   border-top: 1px #aaa;
  //   width: 90%;
  // }
  // .ant-form-item-label > label {
  //   width: 400px;

  //   color: #aaa;
  //   margin-bottom: -3px;
  //   align-items: center;
  // }
  // .closecheckboox {
  //   -webkit-appearance: none;

  //   padding: 0px;

  //   width: 19px;
  //   height: 19px;

  //   border: 1.52px solid #ffd17e;
  //   box-sizing: border-box;
  //   border-radius: 76px;
  //   margin-top: 7px;
  // }
  // .closecheckboox:active {
  //   /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
  //     inset 0px 1px 3px rgba(0, 0, 0, 0.1); */
  // }
  // .closecheckboox:checked {
  //   content: url("/images/Vector.svg");
  //   align-items: center;
  //   padding: 0px;

  //   width: 19px;
  //   height: 19px;

  //   background: #ffd17e;
  //   border: 1.52px solid #ffd17e;
  //   box-sizing: border-box;
  //   border-radius: 76px;
  // }
  // .radiogrop {
  //   display: flex;
  //   flex-direction: column;
  // }
  // .radio {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  // }
`;
