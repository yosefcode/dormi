import styled from "styled-components";
import { Drawer, Menu } from "antd";
export const Drawerstyle = styled(Drawer)`
  .ant-drawer-header {
    color: rgba(228, 237, 237, 1);
    background-color: #1c1547 !important;
    border-bottom: none;
    border-radius: 0px 0px 0 0;
  }
  .ant-drawer-body {
    color: rgba(228, 237, 237, 1);
    background-color: #1c1547 !important;
    padding: 20px 10%;
  }
  .ant-drawer-content {
    border-radius: 0px 0px 24px 24px;
  }
  a {
    color: inherit;
  }
  .ant-badge {
    color: rgba(228, 237, 237, 1);
  }
  .ant-badge-rtl .ant-badge-count {
    transform: translate(-116%, -30%);
  }
  .ant-drawer-close {
    display: none;
    margin-top: -100px !important;
    color: red;
    font-size: 2.4rem;
  }
  .Drawercontennet {
    font-size: 1.6rem;
    line-height: 5rem;
    color: rgba(228, 237, 237, 0.71);
  }
`;

export const Contyner = styled.div`
  .ListOfreqmenue {
    font-size: 1.4rem;
    font-weight: 500;
    font-family: "Heebo";
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    height: 2.4rem;
  }
  .count_inquiries {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 19px;
    background: rgba(255, 255, 255, 0.36);
    color: white;
    fontsize: 1.4rem;
    border-radius: 10px;
  }

  .Drawercontennet {
    width: 70%;
    margin: 45px auto;
  }
  ul.ant-menu.ant-menu-root.ant-menu-inline {
    min-height: 40px;
  }
  .btn_Statistics {
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Heebo";
    color: rgba(228, 237, 237, 0.71);
  }
  .btn_profile {
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Heebo";
    color: rgba(228, 237, 237, 0.71);
  }

  /* @media only screen and (min-width: 600px) {
    .imagelogo {
      width: 80px;
      margin-inline-start: 40%;
      margin-inline-end: 280px;
    }
  } */
  .imagelogo {
    width: 80px;
  }
  .ant-badge {
    color: rgba(228, 237, 237, 1);
  }
  .ant-badge-rtl .ant-badge-count {
    transform: translate(-116%, -30%);
  }
  /* svg {
    font-size: 190%;
  } */
  .progresbar {
    color: brown;
    background-color: red;
  }
  .hderdesktop {
    margin-top: 30px;
    display: flex;
    position: relative;
    flex-direction: column;
    height: calc(100vh - 30px);
  }
  .div_dropdown_menu {
    overflow-y: auto;
    max-height: 50vh;
    overflow-x: hidden;
    // scroll-padding: 250px;
    direction: ltr;
    width: 100%;
    padding: 12px 20px 12px 0;
    margin: 0 -10% 0 10%;}
  }
  .div_dropdown_menu::-webkit-scrollbar {
    width: 8px;
  }

  .div_dropdown_menu::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  .div_dropdown_menu::-webkit-scrollbar-thumb {
    background: rgba(228, 237, 237, 0.71);
    border-radius: 10px;
  }

  .ant-menu-item-only-child {
    font-size: 1rem !important;
  }
  a {
    color: rgba(228, 237, 237, 0.71);
  }
  a:focus {
    font-family: "Heebo";

    font-size: 14px;
    line-height: 118.88%;
    color: #ffffff;

    color: #ffffff;
  }
  hr {
    border: 1px solid #2c2a51;
    transform: rotate(180deg);
  }
  .desktopbutton {
    align-items: center;
    width: 100%;
    height: 33px;
    background: #ffd17e;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 118.88%;

    text-align: center;

    color: #0f0743;
  }
  .desktopicon {
    width: 29px;
    height: 29px;
    top: 0px;
    margin-inline-end: 13px;
    background: rgba(228, 237, 237, 0.13);
    border-radius: 72.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-menu-submenu-arrow {
    right: auto !important;
    left: 0px !important;
  }
  .desktoplogo {
    margin-right: 10%;
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    .haederphone {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .haderdesktop {
      display: none;
    }
    .haederphone {
      width: 100%;
      height: 60px;
      background-color: #1c1547;
      color: #e5e5e5;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
      box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 30%);
      font-size:3rem;
      position: fixed;
      top:0;
      padding:0 20px;
    }

  }
`;

export const Avaterdrwor = styled.div`
  @media only screen and (max-width: 600px) {
    .menu_mobile {
      margin-top: 50px;
      font-weight: 600;
      font-size: 2.4rem;
      color: #e4eded;
      text-align: center;
    }
    .ant-drawer-rtl .ant-drawer-close {
      margin-right: 0;
      margin-top: -100 !important;
    }
    p {
      margin-block-start: 8px !important;
      margin-block-end: 0 !important;
    }
    #plan_name {
      font-size: 1.6rem;
      font-weight: 400;
      color: #e4eded;
    }
    .close_menu {
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
`;
export const MenuStyel = styled(Menu)`
  hr {
    border: 1px solid #2c2a51;
    transform: rotate(180deg);
  }
  .ant-menu {
    color: #e5e5e5;
    background: #1c1547 !important;
    border-left: none !important;
  }
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
    background: repeat-x;
    color: #e5e5e5;
  }
  .ant-menu-item:active {
    background: repeat-x;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: repeat-x;
  }
  .ant-menu-item-selected::after {
    color: repeat-x;
  }
  .ant-menu-submenu-title:active {
    background: repeat-x;
  }
  .ant-menu-item-selected {
    color: red;
  }
  .ant-menu-submenu-title {
    padding-right: 0px;
  }
  .ant-menu-rtl {
    background-color: #1c1547 !important;
  }
  .ant-menu-rtl.ant-menu-inline {
    background-color: #1c1547 !important;
  }
  .ant-menu.ant-menu-rtl .ant-menu-rtl.ant-menu-inline,
  .ant-menu-rtl.ant-menu-vertical {
    background-color: #1c1547 !important;
  }
  .ant-menu-rtl.ant-menu-vertical {
    background-color: #1c1547 !important;
  }
  .ant-menu-submenu {
    color: #e5e5e5;
    background-color: #1c1547 !important;
  }
  .ant-menu-title-content {
    color: rgba(228, 237, 237, 0.71);
    background-color: #1c1547 !important;
    margin-inline-start: -24px;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Heebo";
  }
  .ant-menu-submenu-arrow {
    color: rgba(228, 237, 237, 0.71);
    background: #1c1547 !important;
  }
  .ant-menu-item-icon {
    color: rgba(228, 237, 237, 0.71);
    background: #1c1547 !important;
    font-size: 2rem;
    // right: 2.6rem;
    // position: absolute;
  }
  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    height: 30px;
  }
`;
export const MenuStyelDrouwer = styled(Menu)`
  hr {
    border: 1px solid #2c2a51;
    transform: rotate(180deg);
  }
  .ant-menu {
    color: #e5e5e5;
    background: #1c1547 !important;
    border-left: none !important;
  }
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
    background: repeat-x;
    color: #e5e5e5;
  }
  .ant-menu-item:active {
    background: repeat-x;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: repeat-x;
  }
  .ant-menu-item-selected::after {
    color: repeat-x;
  }
  .ant-menu-submenu-title:active {
    background: repeat-x;
  }
  .ant-menu-item-selected {
    color: red;
  }
  .ant-menu-submenu-title {
    padding-right: 0px;
  }
  .ant-menu-rtl {
    background-color: #1c1547 !important;
  }
  .ant-menu-rtl.ant-menu-inline {
    background-color: #1c1547 !important;
  }
  .ant-menu.ant-menu-rtl .ant-menu-rtl.ant-menu-inline,
  .ant-menu-rtl.ant-menu-vertical {
    background-color: #1c1547 !important;
  }
  .ant-menu-rtl.ant-menu-vertical {
    background-color: #1c1547 !important;
  }
  .ant-menu-submenu {
    color: #e5e5e5;
    background-color: #1c1547 !important;
  }
  .ant-menu-title-content {
    color: rgba(228, 237, 237, 0.71);
    background-color: #1c1547 !important;
    margin-inline-start: -24px;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Heebo";
  }
  .ant-menu-submenu-arrow {
    color: rgba(228, 237, 237, 0.71);
    background: #1c1547 !important;
  }
  .ant-menu-item-icon {
    color: rgba(228, 237, 237, 0.71);
    background: #1c1547 !important;
    font-size: 2rem;
    // right: 2.6rem;
    // position: absolute;
  }
  .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    height: 30px;
  }
`;
