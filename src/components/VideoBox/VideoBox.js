import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  IFrame,
  Loading,
  Error,
  Data,
  Title,
  Info,
} from "./VideoBoxElements";

// end
const getAPI = (videoid) => {
  return (
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=" +
    videoid +
    "&key=AIzaSyBT20-8C1J3AdLYmuguyjXbYMVtSaSUAHI" // key
  );
};

function VideoBox() {
  let { videoid } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(getAPI(videoid))
      .then((res) => res.json())
      .then((res) => {
        setData(res.items[0].snippet);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [videoid]);

  return (
    <Container>
      <IFrame
        src={`https://www.youtube.com/embed/${videoid}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></IFrame>
      <Data>
        {loading ? (
          <Title>Loading</Title>
        ) : error ? (
          <Title>Error</Title>
        ) : (
          <div>
            <Title>{data.title}</Title>
            <Info>
              <p>{new Date(data.publishedAt).toString()}</p>
              <br />
              <p>{data.description}</p>
            </Info>
          </div>
        )}
      </Data>
    </Container>
  );
}

export default VideoBox;
