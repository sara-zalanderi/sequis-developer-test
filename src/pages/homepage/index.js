import { useState, useEffect } from "react";
import { Grid, Image, Label } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Grid.Row)`
  &&.row {
    padding: 50px 100px;
    text-align: center;
  }
  && img {
    object-fit: cover;
  }
`;

const url =
  "https://bitbucket.org/!api/2.0/repositories/sequisinnovationlab/web-developer-test/src/5752ed7c2ecf1eedd96b9404043a2b9efe8c7c96/resources/api";

const Homepage = () => {
  const [articlesData, setArticlesData] = useState();
  const [featuredData, setFeaturedData] = useState();
  const [nonfeaturedData, setNonfeaturedData] = useState();
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
        let trueData = data;
        setArticlesData(data);

        falseData = falseData.data.filter((item) => item.is_featured === false);
        let sortedData = falseData.sort(
          (a, b) =>
            new Date(...b.created_at.split("/").reverse()) -
            new Date(...a.created_at.split("/").reverse())
        );
        setNonfeaturedData(sortedData);

        let foodData = falseData;
        let travelData = falseData;
        let fashionData = falseData;
        let filmData = falseData;
        let businessData = falseData;
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

        trueData = trueData.data.filter((item) => item.is_featured === true);
        setFeaturedData(trueData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid>
      <StyledCard>
        {categoryData.foodData &&
          categoryData.foodData.length > 0 &&
          categoryData.foodData.map((item, index) => {
            return (
              <Grid.Column key={index} width={8}>
                <Image src={item.image} width="100%" height="300" />
                <br />
                <Label basic color="black">
                  By {item.author}
                </Label>
                <h3>{item.title}</h3>
                <br />
                <br />
              </Grid.Column>
            );
          })}
      </StyledCard>
    </Grid>
  );
};

export default Homepage;
