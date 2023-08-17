import { Grid } from "semantic-ui-react";
import styled from "styled-components";

export const StyledCard = styled(Grid.Row)`
  &&.row {
    padding: 15px 100px 30px;
    text-align: center;
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
  && .menu-border .ui.basic.black.button {
    border-bottom: 2px solid black;
  }
  && .ui.basic.black.button.active {
    color: #ff7518 !important;
  }
  && .more-articles {
    background: transparent;
    color: black;
    border: 2px solid black;
    border-radius: 2px;
    margin-bottom: 30px;
    padding: 20px 40px;
    text-transform: uppercase;
    font-weight: 400;
  }
  && h3 {
    color: black;
    font-weight: 400;
    margin: 0.7em 1.7em 2.5em;
  }
  && .label {
    padding: 5px;
    text-transform: uppercase;
    font-size: 0.7rem;
    border-radius: 15px;
  }
  && .label span {
    font-weight: 400;
  }
  && img {
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 320px) {
    &&.row {
      padding-right: 0;
      padding-left: 0;
    }
    && img {
      height: 200px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    &&.row {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    &&.row {
      padding-right: 45px;
      padding-left: 45px;
    }
    && img {
      height: 250px;
    }
  }
`;

export const StyledFeature = styled(Grid)`
  && {
    background: black;
    color: white;
    text-align: center;
    width: 100%;
  }
  && .row {
    padding: 50px 100px 20px;
  }
  && .footer-title {
    display: block;
    width: 100%;
  }
  && .footer-desc {
    color: grey;
    margin-bottom: 35px;
  }
  && h3 {
    font-weight: 400;
    margin: 0.7em 1.7em 2.5em;
  }
  && .label {
    border: 1px solid white;
    background: transparent;
    color: white;
    padding: 5px;
    text-transform: uppercase;
    font-size: 0.7rem;
    border-radius: 15px;
  }
  && .label span {
    font-weight: 400;
  }
  && img {
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 320px) {
    && .row {
      padding-right: 0;
      padding-left: 0;
    }
    && .row > .column {
      width: 100%;
    }
    && img {
      height: 200px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    && .row {
      padding-right: 15px;
      padding-left: 15px;
    }
    && .row > .column {
      width: 100%;
    }
    && img {
      height: 300px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    && .row {
      padding-right: 30px;
      padding-left: 30px;
    }
    && img {
      height: 250px;
    }
  }
`;
