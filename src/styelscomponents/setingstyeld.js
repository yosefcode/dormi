import styled from "styled-components";

export const Contener = styled.div`
  width: 60%;
  margin: 20px auto;
  font-size: 2.4rem;
  font-weight: 700;
  font-family: "Heebo";
  color: #0f0743;
  text-align: right;
  padding: 0 0 50px;

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
    margin: 6px 0px;
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
  }
  .ant-form {
    width: 100%;
  }

  .link {
    font-weight: 500;
    font-size: 1.5rem;
    color: #485464;
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    width: 84%;
    padding: 20px 0;

    .ant-form {
      width: 100%;
    }
  }
`;
