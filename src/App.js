import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";
import styled from "styled-components";

import Homepage from "./pages/homepage";
import Detail from "./pages/detail";
import Footer from "./pages/footer";

const url =
  "https://bitbucket.org/!api/2.0/repositories/sequisinnovationlab/web-developer-test/src/5752ed7c2ecf1eedd96b9404043a2b9efe8c7c96/resources/api";

const StyledMenu = styled(Grid.Row)`
  &&.row {
    padding: 45px 100px 15px;
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
`;

function App() {
  const [completeData, setCompleteData] = useState();
  const [activeItem, setActiveItem] = useState("all");

  useEffect(() => {
    fetch(url + "/articles.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCompleteData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleItemClick = (_, { name }) => {
    setActiveItem(name);
  };

  return (
    <Router>
      <Grid>
        <StyledMenu>
          <Grid.Column width={4} />
          <Grid.Column width={4}>
            <Button
              basic
              color="black"
              as={Link}
              to="/"
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
              as={Link}
              to="/"
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
              as={Link}
              to="/"
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
              as={Link}
              to="/"
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
              as={Link}
              to="/"
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
              as={Link}
              to="/"
              name="business"
              className={activeItem === "business" && "active"}
              onClick={handleItemClick}
            >
              Business & Work
            </Button>
          </Grid.Column>
        </StyledMenu>
      </Grid>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage completeData={completeData} categoryName={activeItem} />
          }
        />
        <Route path="/detail/:id" element={<Detail url={url} />} />
      </Routes>
      <Footer completeData={completeData} />
    </Router>
  );
}

export default App;
