import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    margin-top: 20px;
    margin-inline-start: 200px;
  }
  @media only screen and (max-width: 600px) {
    .hader {
      background-color: blue;
      margin-bottom: 305%;
    }
  }
  hr {
    border-top: 1px #aaa;
    width: 90%;
  }
  .ant-form-item-label > label {
    width: 400px;

    color: #aaa;
    margin-bottom: -3px;
    align-items: center;
  }
  .ant-form-item-control-input {
    width: 215px;
  }
  @media only screen and (max-width: 600px) {
    .ant-form-item-label > label {
      position: static;
      width: 332px;
      height: 19px;
      text-align: right;

      /* margin: 5px 0px; */
    }
    .ant-form {
      position: absolute;

      width: 267px;
      margin-left: 5%;
      text-align: center;
      padding-left: 7%;
      padding-right: 7%;
    }
  }
`;
