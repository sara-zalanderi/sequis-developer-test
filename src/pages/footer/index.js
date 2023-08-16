import { useState, useEffect } from "react";
import { Grid, Image, Label } from "semantic-ui-react";
import styled from "styled-components";

const StyledFooter = styled(Grid)`
  && {
    background: black;
    color: white;
    text-align: center;
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
  }
  && .footer-grey {
    padding: 20px 30px;
    background: #1e1f21;
    text-align: left;
  }
  && .footer-orange {
    color: #ff7518;
    margin-bottom: 0;
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
  }
`;

const Footer = ({ completeData }) => {
  const [initCount, setInitCount] = useState(0);
  const [featuredData, setFeaturedData] = useState();

  useEffect(() => {
    if (completeData && initCount === 0) {
      let trueData = completeData;
      trueData = trueData.data.filter((item) => item.is_featured === true);
      trueData = trueData.slice(0, 3);
      setFeaturedData(trueData);
      setInitCount(1);
    }
  }, [completeData, initCount]);

  return (
    <StyledFooter columns="equal">
      <Grid.Row>
        <div className="footer-title">
          <h1>Empowering Minds</h1>
          <h3 className="footer-desc">
            Insights and Strategies for Personal and Professional Growth
          </h3>
          <br />
        </div>
        {featuredData &&
          featuredData.length > 0 &&
          featuredData.map((item, index) => {
            return (
              <Grid.Column key={index}>
                <Image src={item.image} width="100%" height="200" />
                <br />
                <Label>
                  <span>By</span> {item.author}
                </Label>
                <h3>{item.title}</h3>
                <br />
                <br />
              </Grid.Column>
            );
          })}
      </Grid.Row>
      <Grid.Row className="footer-grey">
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
