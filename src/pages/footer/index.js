import { Grid, Image } from "semantic-ui-react";
import logo from "../../images/sequis-logo.png";

import { StyledFooter } from "./index.style";

const Footer = () => {
  return (
    <StyledFooter>
      <Grid.Row>
        <Grid.Column
          computer={6}
          tablet={6}
          mobile={16}
          className="footer-logo"
        >
          <Image src={logo} height="30" />
        </Grid.Column>
        <Grid.Column
          computer={10}
          tablet={10}
          mobile={16}
          className="mobile-footer"
        >
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
