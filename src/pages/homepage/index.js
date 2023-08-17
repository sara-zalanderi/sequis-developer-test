import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Label, Button, Loader } from "semantic-ui-react";
import { StyledCard, StyledFeature } from "./index.style";

const Homepage = ({ completeData, categoryName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articlesData, setArticlesData] = useState();
  const [nonfeaturedData, setNonfeaturedData] = useState();
  const [featuredData, setFeaturedData] = useState();
  const [compareData, setCompareData] = useState();

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
      setIsLoading(false);
    }
  }, [completeData, categoryName]);

  useEffect(() => {
    if (nonfeaturedData) {
      let catData = nonfeaturedData;
      let compData;
      let moreData;
      switch (categoryName) {
        case "all":
          compData = catData;
          break;
        case "food":
          compData = catData.filter((item) => item.categories.id === 1);
          break;
        case "travel":
          compData = catData.filter((item) => item.categories.id === 2);
          break;
        case "fashion":
          compData = catData.filter((item) => item.categories.id === 3);
          break;
        case "film":
          compData = catData.filter((item) => item.categories.id === 4);
          break;
        case "business":
          compData = catData.filter((item) => item.categories.id === 5);
          break;
        default:
          return;
      }
      setCompareData(compData);

      moreData = compData;
      if (moreData.length > 10) {
        moreData = moreData.slice(0, 10);
      }
      setArticlesData(moreData);
    }
  }, [categoryName, nonfeaturedData]);

  const handleMoreArticles = () => {
    setArticlesData(compareData.slice(0, articlesData.length + 10));
  };

  return isLoading ? (
    <Loader active inline="centered" />
  ) : (
    <Grid>
      <StyledCard>
        {articlesData &&
          articlesData.length > 0 &&
          articlesData.map((item, index) => {
            return (
              <Grid.Column key={index} computer={8} tablet={8} mobile={16}>
                <Link to={`/detail/${item.id}`}>
                  <Image src={item.image} width="100%" height="300" />
                  <Label basic color="black">
                    <span>By</span> {item.author}
                  </Label>
                  <h3>{item.title}</h3>
                </Link>
              </Grid.Column>
            );
          })}
        <Grid.Column width={16}>
          {articlesData &&
            compareData &&
            articlesData.length < compareData.length && (
              <Button
                className="more-articles"
                onClick={() => handleMoreArticles()}
              >
                More Articles
              </Button>
            )}
        </Grid.Column>
      </StyledCard>

      <StyledFeature columns="equal">
        <Grid.Row>
          <div className="footer-title">
            <h1>Empowering Minds</h1>
            <h3 className="footer-desc">
              Insights and Strategies for Personal and Professional Growth
            </h3>
          </div>
          {featuredData &&
            featuredData.length > 0 &&
            featuredData.map((item, index) => {
              return (
                <Grid.Column key={index}>
                  <Link to={`/detail/${item.id}`}>
                    <Image src={item.image} width="100%" height="200" />
                    <Label>
                      <span>By</span> {item.author}
                    </Label>
                    <h3>{item.title}</h3>
                  </Link>
                </Grid.Column>
              );
            })}
        </Grid.Row>
      </StyledFeature>
    </Grid>
  );
};

export default Homepage;
