import { Grid } from "semantic-ui-react";
import styled from "styled-components";

export const StyledMenu = styled(Grid.Row)`
  &&.row {
    padding: 45px 100px 15px;
  }
  && .dev-logo {
    position: absolute;
    background: rgb(255, 117, 24);
    top: 36px;
    left: -37px;
    border-bottom-left-radius: 5px;
    transform: rotate(-90deg);
    padding: 20px 30px 5px 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
  && .ui.basic.black.button {
    border: none;
    border-radius: 0;
    box-shadow: none !important;
    width: 100%;
    text-align: left;
    font-weight: bold;
    padding-left: 0;
  }
  && .menu-border {
    border-top: 2px solid black;
  }
  && .row > .column.menu-border {
    width: 31.33333333% !important;
    margin-right: 2%;
  }
  && .ui.basic.black.button.active {
    color: #ff7518 !important;
  }
  && .icon {
    display: none;
    right: 15px;
    position: absolute;
    font-size: 2rem;
    top: 13px;
    color: #ff7518;
  }

  @media only screen and (max-width: 767px) {
    && .icon {
      display: block;
    }
    &&.row {
      padding: 0;
      margin-bottom: -0.75rem;
    }
    &&.row > .column {
      display: none;
    }
    && .dev-logo {
      transform: initial;
      position: relative;
      border-radius: 0;
      top: 0;
      left: 0;
      font-size: 1rem;
    }
  }
`;

export const StyledMobile = styled(Grid)`
  && {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    && {
      display: flex;
      visibility: hidden;
      position: absolute;
    }
    &&.visible {
      position: fixed;
      height: 100%;
      z-index: 1;
      width: 100%;
      top: 0;
      margin: 0;
      visibility: visible;
    }
    &&.visible .column {
      padding: 0;
    }
    &&.visible .column .sidebar.menu {
      width: 100%;
      top: 0;
      padding-top: 50px;
    }
    &&.visible .item {
      font-weight: bold;
      background: none;
      font-size: 1rem;
    }
    &&.visible .item.active,
    &&.visible .item.active:hover {
      color: #ff7518;
      background: none;
    }
    &&.visible .item:hover {
      color: initial;
      background: initial;
    }
    && .ui.vertical.menu .item:before {
      display: none !important;
    }
    && .icon {
      position: absolute;
      color: #ff7518;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
