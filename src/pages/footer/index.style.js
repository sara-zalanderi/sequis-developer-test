import { Grid } from "semantic-ui-react";
import styled from "styled-components";

export const StyledFooter = styled(Grid)`
  &&.grid {
    background: #1e1f21;
    color: white;
    margin-top: 0;
  }
  && .row {
    padding: 20px 30px;
  }
  && .footer-orange {
    color: #ff7518;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 320px) {
    && .mobile-footer {
      text-align: center;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    && .mobile-footer {
      text-align: center;
    }
  }
`;
