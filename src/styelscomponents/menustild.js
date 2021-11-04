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
`;

export const Contyner = styled.div`
  .ListOfreqmenue {
    margin-bottom: 7px;
  }
  .Drawercontennet {
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start; */
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
    margin-top: 39px;
    display: flex;

    flex-direction: column;
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
    margin-bottom: 17px;
    align-items: center;
    padding: 7px;

    position: static;
    width: 196px;
    height: 33px;
    left: 0px;
    top: 27px;

    background: #ffd17e;
    border-radius: 4px;
    /* font-family:""; */
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 118.88%;
    /* or 15px */

    text-align: center;

    color: #0f0743;
  }
  .desktopmenu {
    margin-top: 84px;

    margin-inline-start: 23px;
    width: 166px;
  }
  .desktopicon {
    width: 29px;
    height: 29px;
    left: 83px;
    top: 0px;
    margin-inline-end: 13px;
    background: rgba(228, 237, 237, 0.13);
    border-radius: 72.5px;
  }
  .desktoplogo {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
      height: 52px;
      background-color: #1c1547;
      color: #e5e5e5;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      z-index: 2;
      box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 30%);
    }
  }
`;

export const Avaterdrwor = styled.div`
  text-align: center;
  color: rgba(228, 237, 237, 1);
  /* background-color: #1c1547; */
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
    color: #e5e5e5;
    background-color: #1c1547 !important;
    margin-inline-start: -21px;
  }
  .ant-menu-submenu-arrow {
    color: #e5e5e5 !important;
    background: #1c1547 !important;
  }
  .ant-menu-item-icon {
    color: #e5e5e5 !important;
    background: #1c1547 !important;
  }
`;
