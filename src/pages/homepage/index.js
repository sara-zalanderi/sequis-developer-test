import { useState, useEffect } from "react";
import { Grid, Image, Label, Button, Menu } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Grid.Row)`
  &&.row {
    padding: 50px 100px;
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
  && img {
    object-fit: cover;
    border-radius: 10px;
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
`;

const url =
  "https://bitbucket.org/!api/2.0/repositories/sequisinnovationlab/web-developer-test/src/5752ed7c2ecf1eedd96b9404043a2b9efe8c7c96/resources/api";

const Homepage = () => {
  const [articlesData, setArticlesData] = useState();
  const [featuredData, setFeaturedData] = useState();
  const [nonfeaturedData, setNonfeaturedData] = useState();
  const [activeItem, setActiveItem] = useState("all");
  const [categoryData, setCategoryData] = useState({
    foodData: [],
    travelData: [],
    fashionData: [],
    filmData: [],
    businessData: [],
  });

  useEffect(() => {
    fetch(url + "/articles.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let falseData = data;
        falseData = falseData.data.filter((item) => item.is_featured === false);
        let sortedData = falseData.sort(
          (a, b) =>
            new Date(...b.created_at.split("/").reverse()) -
            new Date(...a.created_at.split("/").reverse())
        );
        setNonfeaturedData(sortedData);

        let foodData = sortedData;
        let travelData = sortedData;
        let fashionData = sortedData;
        let filmData = sortedData;
        let businessData = sortedData;
        foodData = foodData.filter((item) => item.categories.id === 1);
        travelData = travelData.filter((item) => item.categories.id === 2);
        fashionData = fashionData.filter((item) => item.categories.id === 3);
        filmData = filmData.filter((item) => item.categories.id === 4);
        businessData = businessData.filter((item) => item.categories.id === 5);
        setCategoryData({
          foodData,
          travelData,
          fashionData,
          filmData,
          businessData,
        });

        let trueData = data;
        trueData = trueData.data.filter((item) => item.is_featured === true);
        setFeaturedData(trueData);

        setArticlesData(sortedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleItemClick = (_, { name }) => {
    setActiveItem(name);
    switch (name) {
      case "all":
        setArticlesData(nonfeaturedData);
        break;
      case "fashion":
        setArticlesData(categoryData.fashionData);
        break;
      case "film":
        setArticlesData(categoryData.filmData);
        break;
      case "food":
        setArticlesData(categoryData.foodData);
        break;
      case "travel":
        setArticlesData(categoryData.travelData);
        break;
      case "business":
        setArticlesData(categoryData.businessData);
        break;
      default:
        return;
    }
  };

  return (
    <Grid>
      <StyledCard>
        <Grid.Column width={4} />
        <Grid.Column width={4}>
          <Button
            basic
            color="black"
            name="all"
            className={activeItem === "all" && "active"}
            onClick={handleItemClick}
          >
            All Articles
          </Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            basic
            color="black"
            name="fashion"
            className={activeItem === "fashion" && "active"}
            onClick={handleItemClick}
          >
            Fashion & Beauty
          </Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            basic
            color="black"
            name="film"
            className={activeItem === "film" && "active"}
            onClick={handleItemClick}
          >
            Film
          </Button>
        </Grid.Column>
        <Grid.Column width={4} />
        <Grid.Column width={4} className="menu-border">
          <Button
            basic
            color="black"
            name="food"
            className={activeItem === "food" && "active"}
            onClick={handleItemClick}
          >
            Food & Drink
          </Button>
        </Grid.Column>
        <Grid.Column width={4} className="menu-border">
          <Button
            basic
            color="black"
            name="travel"
            className={activeItem === "travel" && "active"}
            onClick={handleItemClick}
          >
            Travel
          </Button>
        </Grid.Column>
        <Grid.Column width={4} className="menu-border">
          <Button
            basic
            color="black"
            name="business"
            className={activeItem === "business" && "active"}
            onClick={handleItemClick}
          >
            Business & Work
          </Button>
        </Grid.Column>
        <Grid.Column width={16}>
          <br />
        </Grid.Column>
        {articlesData &&
          articlesData.length > 0 &&
          articlesData.map((item, index) => {
            return (
              <Grid.Column key={index} width={8}>
                <Image src={item.image} width="100%" height="300" />
                <br />
                <Label basic color="black">
                  <span>By</span> {item.author}
                </Label>
                <h3>{item.title}</h3>
                <br />
                <br />
              </Grid.Column>
            );
          })}
        <Grid.Column width={16}>
          {articlesData && articlesData.length > 10 && (
            <Button color="orange">More Articles</Button>
          )}
        </Grid.Column>
      </StyledCard>
    </Grid>
  );
};

export default Homepage;
