import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import moment from "moment";

import { StyledDetail } from "./index.style";

const Detail = ({ url }) => {
  const [detailData, setDetailData] = useState();
  const location = useLocation();

  useEffect(() => {
    fetch(url + "/articles.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let filteredData = data;
        filteredData = filteredData.data.find(
          (item) => item.id === parseInt(location.pathname.slice(8))
        );
        setDetailData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url, location]);

  return (
    <Grid>
      <StyledDetail>
        {detailData && (
          <Grid.Column>
            <div className="detail-image">
              <Image src={detailData.image} width="100%" height="450" />
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
