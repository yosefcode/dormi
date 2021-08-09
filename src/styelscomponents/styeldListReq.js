import styled from "styled-components";
import { Select, Card, Tag, Dropdown } from "antd";

export const Contener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .filteroption {
    display: flex;

    flex-direction: column;
    align-items: center;
    .ant-select {
      width: 190px;
    }
  }
  .selcts {
    margin: 4px;
  }

  .ant-card {
    margin: 3px;
  }

  .top_icon {
    margin-top: 4%;
    display: flex;

    flex-direction: row;
    align-items: center;
    margin-bottom: 3%;
  }
  span.text {
    width: 176px;
    margin-right: 3%;

    text-align: center;
    margin-left: 3%;
  }
  .cardname {
    background-color: #33b5e5;
    color: white;
  }
  .cardphone {
    background-color: #00c851;
    color: white;
  }
  @media only screen and (min-width: 600px) {
    span.text {
      width: 500px;
    }
  }
  .export_exel {
    background-color: #00c851;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%);
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    border-radius: 100px;
    color: white;
  }
  .filter {
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%);
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    border-radius: 100px;
    color: blue;
  }

  .ant-card.ant-card-bordered {
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    .ant-card.ant-card-bordered {
      width: 900px !important;
    }
    .card-body-spen {
      margin-inline-start: 84px;
    }
  }
  @media only screen and (max-width: 600px) {
    .card-body-spen {
      margin-inline-start: 3px;
    }
  }

  .top_icon button {
    background-color: blue;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%);
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    border-radius: 100px;
    color: white;
  }
`;

export const StyelsDropdown = styled(Dropdown)``;

export const StyelsCard = styled(Card)`
  .ant-card-head {
    background-color: ${(props) => props.primary.backgroundcoler}!important;
    height: 39px;
  }
  .ant-card-actions {
    height: 51px;
  }
  .ant-card-body {
    padding: 10px;
  }
`;

export const StyeldSelect = styled(Select)`
  @media only screen and (min-width: 600px) {
    width: 110px;
  }
  width: 80px;

  .ant-select-selector {
    background-color: ${(props) => props.primary.backgroundcoler}!important;
    color: ${(props) => props.primary.color}!important;
    border-color: ${(props) => props.primary.border}!important;
    /* font-size: 7px; */
    /* left: 16px; */
  }
  .ant-select-arrow {
    color: ${(props) => props.primary.color}!important;
  }
  .ant-card-extra {
    margin-right: -14px;
  }
`;
export const StyeldTag = styled(Tag)`
  .ant-tag-success {
    width: 100% !important;
    text-align: center;
    height: 100%;
  }
  .ant-tag-red {
    width: 100%;
    text-align: center;
    height: 100%;
  }
  .span.ant-tag.ant-tag-warning {
    width: 100%;
    text-align: center;
    height: 100%;
  }
`;
