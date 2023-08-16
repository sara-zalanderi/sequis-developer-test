import { Grid } from "semantic-ui-react";
import styled from "styled-components";

const StyledFooter = styled(Grid)`
  && {
    background: #1e1f21;
    color: white;
  }
  && .row {
    padding: 20px 30px;
  }
  && .footer-orange {
    color: #ff7518;
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Grid.Row>
        <Grid.Column width={6} />
        <Grid.Column width={10}>
          <p className="footer-orange">
            The more that you read, the more things you will know. The more that
            you learn, the more places you'll go.
          </p>
          <p>
            Created by the <span>Innovation Lab</span> for testing web
            development skills.
          </p>
        </Grid.Column>
      </Grid.Row>
    </StyledFooter>
  );
};

export default Footer;
