import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Image, Label, Button } from "semantic-ui-react";
import moment from "moment";
import styled from "styled-components";

const StyledDetail = styled(Grid.Row)`
  &&.row {
    padding: 15px 100px 60px;
    text-align: center;
  }
  && h1,
  && h2,
  && p {
    padding-left: 50px;
    padding-right: 50px;
  }
  && h1 {
    margin-top: 30px;
    font-size: 3rem;
  }
  && h2 {
    font-weight: 400;
  }
  && p {
    text-align: left;
    font-size: 1.2rem;
  }
  && .detail-image {
    position: relative;
  }
  && .detail-image .detail-info {
    position: absolute;
    left: 0;
    bottom: 0;
    background: white;
    border-top-right-radius: 10px;
    padding: 7px 15px;
    text-align: left;
  }
  && .detail-image .detail-info p {
    padding: 0;
    margin-bottom: 5px;
    font-size: 10px;
    text-transform: uppercase;
    color: dimgrey;
  }
  && .detail-image .detail-info h4 {
    margin: 0;
    font-size: 11px;
    text-transform: uppercase;
  }
  && .detail-image .detail-info span {
    font-weight: 400;
  }
  && img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

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
            <div style={{ padding: "15px 100px" }}>
              <h1>{detailData.title}</h1>
              <h2>{detailData.summary}</h2>
              <br />
              <hr />
              <br />
              <p>{detailData.content}</p>
            </div>
          </Grid.Column>
        )}
      </StyledDetail>
    </Grid>
  );
};

export default Detail;
