import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, Button, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import staticData from "./data/articles.json";
import categoriesData from "./data/categories.json";
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
        setCompleteData(staticData);
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
          <Grid.Column width={12}>
            <Grid columns={3}>
              <Grid.Row>
                {categoriesData &&
                  categoriesData.data.length > 0 &&
                  categoriesData.data.map((item, index) => {
                    return (
                      <Grid.Column key={index}>
                        <Button
                          basic
                          color="black"
                          as={Link}
                          to="/"
                          name={item.alias}
                          className={activeItem === item.alias && "active"}
                          onClick={handleItemClick}
                        >
                          {item.title}
                        </Button>
                      </Grid.Column>
                    );
                  })}
                <Grid.Column className="menu-border" />
                <Grid.Column className="menu-border" />
                <Grid.Column className="menu-border" />
              </Grid.Row>
            </Grid>
          </Grid.Column>
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
              {categoriesData &&
                categoriesData.data.length > 0 &&
                categoriesData.data.map((item, index) => {
                  return (
                    <Menu.Item
                      key={index}
                      as={Link}
                      to="/"
                      name={item.alias}
                      className={activeItem === item.alias && "active"}
                      onClick={handleItemClick}
                    >
                      {item.title}
                    </Menu.Item>
                  );
                })}
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
      <Footer />
    </Router>
  );
}

export default App;
