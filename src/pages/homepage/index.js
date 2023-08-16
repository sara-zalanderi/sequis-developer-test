import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Label, Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Grid.Row)`
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
  }
`;

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

const Homepage = ({ completeData, categoryName }) => {
  const [articlesData, setArticlesData] = useState();
  const [nonfeaturedData, setNonfeaturedData] = useState();
  const [featuredData, setFeaturedData] = useState();

  useEffect(() => {
    if (completeData) {
      let falseData = completeData;
      falseData = falseData.data.filter((item) => item.is_featured === false);
      let sortedData = falseData.sort(
        (a, b) =>
          new Date(...b.created_at.split("/").reverse()) -
          new Date(...a.created_at.split("/").reverse())
      );
      setNonfeaturedData(sortedData);

      setArticlesData(sortedData);

      let trueData = completeData;
      trueData = trueData.data.filter((item) => item.is_featured === true);
      trueData = trueData.slice(0, 3);
      setFeaturedData(trueData);
    }
  }, [completeData, categoryName]);

  useEffect(() => {
    if (nonfeaturedData) {
      let catData = nonfeaturedData;
      switch (categoryName) {
        case "all":
          setArticlesData(catData);
          break;
        case "fashion":
          setArticlesData(catData.filter((item) => item.categories.id === 3));
          break;
        case "film":
          setArticlesData(catData.filter((item) => item.categories.id === 4));
          break;
        case "food":
          setArticlesData(catData.filter((item) => item.categories.id === 1));
          break;
        case "travel":
          setArticlesData(catData.filter((item) => item.categories.id === 2));
          break;
        case "business":
          setArticlesData(catData.filter((item) => item.categories.id === 5));
          break;
        default:
          return;
      }
    }
  }, [categoryName, nonfeaturedData]);

  return (
    <Grid>
      <StyledCard>
        {articlesData &&
          articlesData.length > 0 &&
          articlesData.map((item, index) => {
            return (
              <Grid.Column key={index} width={8}>
                <Link to={`/detail/${item.id}`}>
                  <Image src={item.image} width="100%" height="300" />
                  <br />
                  <Label basic color="black">
                    <span>By</span> {item.author}
                  </Label>
                  <h3>{item.title}</h3>
                  <br />
                  <br />
                </Link>
              </Grid.Column>
            );
          })}
        <Grid.Column width={16}>
          {articlesData && articlesData.length > 10 && (
            <Button color="orange">More Articles</Button>
          )}
        </Grid.Column>
      </StyledCard>

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
      </StyledFooter>
    </Grid>
  );
};

export default Homepage;
