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
} from "./PlaylistBoxElements";

// end
const getAPI = (listid) => {
  return `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${listid}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
};

function PlaylistBox() {
  let { listid } = useParams();

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
    document.title = data.title;
  }, [listid]);

  if (!loading) {
    document.title = "Zen Watch - " + data.title;
  }

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

export default PlaylistBox;
