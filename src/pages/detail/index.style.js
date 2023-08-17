import { Grid } from "semantic-ui-react";
import styled from "styled-components";

export const StyledDetail = styled(Grid.Row)`
  &&.row {
    padding: 15px 100px 60px;
    text-align: center;
  }
  && h1,
  && h2,
  && p {
    padding-left: 50px;
    padding-right: 50px;
  }
  && h1 {
    margin-top: 30px;
    font-size: 3rem;
  }
  && h2 {
    font-weight: 400;
  }
  && p {
    text-align: left;
    font-size: 1.2rem;
  }
  && .detail-image {
    position: relative;
  }
  && .detail-image .detail-info {
    position: absolute;
    left: 0;
    bottom: 0;
    background: white;
    border-top-right-radius: 10px;
    padding: 7px 15px;
    text-align: left;
  }
  && .detail-image .detail-info p {
    padding: 0;
    margin-bottom: 5px;
    font-size: 10px;
    text-transform: uppercase;
    color: dimgrey;
  }
  && .detail-image .detail-info h4 {
    margin: 0;
    font-size: 11px;
    text-transform: uppercase;
  }
  && .detail-image .detail-info span {
    font-weight: 400;
  }
  && .detail-content {
    padding: 15px 100px;
  }
  && .detail-content hr {
    margin: 25px 0 35px;
  }
  && img {
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (max-width: 320px) {
    &&.row {
      padding-right: 0;
      padding-left: 0;
    }
    && h1,
    && h2,
    && p {
      padding-left: 0;
      padding-right: 0;
    }
    && h1 {
      font-size: 2rem;
    }
    && h2 {
      font-size: 1.4rem;
    }
    && .detail-content {
      padding: 15px;
    }
    && .detail-image {
      margin: -19px -15px -15px;
    }
    && .detail-image img {
      border-radius: 0 0 10px 10px;
    }
    && img {
      height: 200px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    &&.row {
      padding-right: 15px;
      padding-left: 15px;
    }
    && h1,
    && h2,
    && p {
      padding-left: 0;
      padding-right: 0;
    }
    && .detail-content {
      padding: 15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
`;
