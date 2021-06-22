import styled from "styled-components";

export const Contener = styled.div`
  p {
    margin-inline-start: 10%;
    text-align: start;
  }
  .ant-form {
  }

  .ant-form-item-label > label {
    width: 200px;

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
