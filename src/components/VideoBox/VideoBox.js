import styled from "styled-components";
import { useState, useEffect } from "react";

// styles
const Container = styled.div`
  margin: 1em 12.5%;
`;

const IFrame = styled.iframe`
  display: block;
  height: 75vh;
  width: 75vw;
`;

const Loading = styled.h1``;
const Error = styled.h1``;
const Data = styled.div`
  margin: 0.5em 0;
  padding: 0.5em;
  background-color: #2a2e32;
  border-radius: 1em;
  color: #eff0f1;
`;
const Title = styled.h1`
  color: #42aee9;
  font-weight: 600;
`;
const Info = styled.div`
  font-style: italic;
`;

// end
const getAPI = (listid) => {
  return (
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=" + // address
    listid + // query
    "&key=AIzaSyBT20-8C1J3AdLYmuguyjXbYMVtSaSUAHI" // key
  );
};

function VideoBox({ listid }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(getAPI(listid))
      .then((res) => res.json())
      .then((res) => {
        setData(res.items[0].snippet);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [listid]);

  return (
    <Container>
      <IFrame
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${listid}`}
        frameBorder="0"
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
              <p>{new Date("2021-01-03T14:23:15Z").toString()}</p>
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
