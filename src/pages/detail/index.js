import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Loader } from "semantic-ui-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";

import staticData from "../../data/articles.json";
import { StyledDetail } from "./index.style";

const Detail = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailData, setDetailData] = useState();
  const location = useLocation();

  useEffect(() => {
    let locPath = parseInt(location.pathname.slice(8));
    fetch(url + "/articles.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let filteredData = data;
        filteredData = filteredData.data.find((item) => item.id === locPath);
        setDetailData(filteredData);
        setIsLoading(false);
      })
      .catch((err) => {
        let filteredData = staticData;
        filteredData = filteredData.data.find((item) => item.id === locPath);
        setDetailData(filteredData);
        setIsLoading(false);
        console.log(err);
      });
  }, [url, location]);

  return isLoading ? (
    <Loader active inline="centered" />
  ) : (
    <Grid>
      <StyledDetail>
        {detailData && (
          <Grid.Column>
            <div className="detail-image">
              <LazyLoadImage
                src={detailData.image}
                width="100%"
                height="450"
                effect="blur"
              />
              <span className="detail-info">
                <p>
                  Published{" "}
                  {moment(detailData.created_at).format("MMMM DD, YYYY")}
                </p>
                <h4>
                  <span>By</span> {detailData.author}
                </h4>
              </span>
            </div>
            <div className="detail-content">
              <h1>{detailData.title}</h1>
              <h2>{detailData.summary}</h2>
              <hr />
              <p>{detailData.content}</p>
            </div>
          </Grid.Column>
        )}
      </StyledDetail>
    </Grid>
  );
};

export default Detail;
