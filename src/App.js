import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, Button, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import Homepage from "./pages/homepage";
import Detail from "./pages/detail";
import Footer from "./pages/footer";
import { StyledMenu, StyledMobile } from "./App.style";

const url =
  "https://bitbucket.org/!api/2.0/repositories/sequisinnovationlab/web-developer-test/src/5752ed7c2ecf1eedd96b9404043a2b9efe8c7c96/resources/api";

function App() {
  const [completeData, setCompleteData] = useState();
  const [activeItem, setActiveItem] = useState("all");
  const [visible, setVisible] = useState(false);

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
    setVisible(false);
  };

  return (
    <Router>
      <Grid>
        <StyledMenu>
          <Icon name="bars" onClick={() => setVisible(true)} />
          <div className="dev-logo">Web Developer</div>
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
          <Grid.Column width={4}>
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
          <Grid.Column width={4}>
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
          <Grid.Column width={4}>
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
          <Grid.Column width={4} />
          <Grid.Column width={4} className="menu-border" />
          <Grid.Column width={4} className="menu-border" />
          <Grid.Column width={4} className="menu-border" />
        </StyledMenu>
      </Grid>

      <StyledMobile columns={1} className={visible && "visible"}>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="thin"
            >
              <Icon name="close" onClick={() => setVisible(false)} />
              <Menu.Item
                as={Link}
                to="/"
                name="all"
                className={activeItem === "all" && "active"}
                onClick={handleItemClick}
              >
                All Articles
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/"
                name="food"
                className={activeItem === "food" && "active"}
                onClick={handleItemClick}
              >
                Food & Drink
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/"
                name="fashion"
                className={activeItem === "fashion" && "active"}
                onClick={handleItemClick}
              >
                Fashion & Beauty
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/"
                name="travel"
                className={activeItem === "travel" && "active"}
                onClick={handleItemClick}
              >
                Travel
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/"
                name="film"
                className={activeItem === "film" && "active"}
                onClick={handleItemClick}
              >
                Film
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/"
                name="business"
                className={activeItem === "business" && "active"}
                onClick={handleItemClick}
              >
                Business & Work
              </Menu.Item>
            </Sidebar>
          </Sidebar.Pushable>
        </Grid.Column>
      </StyledMobile>

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
