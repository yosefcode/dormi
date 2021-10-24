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
  svg {
    font-size: 190%;
  }
  .progresbar {
    color: brown;
    background-color: red;
  }
  .haeder {
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
