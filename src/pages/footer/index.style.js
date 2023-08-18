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
  && .row > .column.footer-logo {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 767px) {
    && .mobile-footer {
      text-align: center;
    }
    && .row > .column.footer-logo {
      justify-content: center;
    }
  }
`;
