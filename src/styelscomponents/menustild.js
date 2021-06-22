import styled from "styled-components";

export const Contyner = styled.div`
  .imagelogo {
    width: 80px;
  }
  .ant-menu-horizontal {
    background-color: #4285f4;
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    /* color: white; */
  }
  svg {
    color: white;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
    color: white;
  }

  .ant-menu-horizontal > .ant-menu-item a {
    color: white;
  }
  .ant-menu-title-content {
    color: white;
  }
  .ant-menu-submenu-arrow {
    color: white;
  }

  .ant-badge {
    direction: ltr !important;
    color: white;
  }

  .ant-badge-count,
  .ant-badge-dot,
  .ant-badge .ant-scroll-number-custom-component {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, -66%);
    transform-origin: 84% 17%;
  }
  /* .ant-menu-item-selected {
    color: red !important;
  } */
`;
