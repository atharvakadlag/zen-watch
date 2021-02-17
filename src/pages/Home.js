import React, { useState } from "react";
import styled from "styled-components";
import VideoBox from "../components/VideoBox/VideoBox.js";
import { Link, Redirect } from "react-router-dom";

const Container = styled.div`
  margin: 2em 5em;

  @media screen and (max-width: 768px) {
    margin: 2em 2em;
  }
`;

const Form = styled.form``;
const Label = styled.label`
  font-size: 1.5em;
  color: #42aee9;
  display: block;
  font-weight: 600;
`;
const Text = styled.input`
  width: 100%;
  font-size: 1.2em;
  display: block;
  border-radius: 10px;
  padding: 0.2rem;
  margin: 0.5rem 0;
  color: #2a2e32;
  border: none;
`;
const Submit = styled.input`
  display: block;
  border-radius: 10px;
  font-size: 1em;
  padding: 0.2rem;
  margin: 1em auto;
  height: 2em;
  width: 100%;
  border: none;
  background-color: #42aee9;
  color: #2a2e32;
`;

function Home(sendQuery) {
  const [query, setQuery] = useState("");
  const [redirect, setRedirect] = useState(false);

  const validateSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      alert("stop screwing around");
      return;
    }
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={`/video/${query}`} />;
  } else {
    return (
      <Container>
        <Form onSubmit={validateSubmit}>
          <Label htmlFor="queryid">Query:</Label>
          <Text
            type="text"
            name="query"
            id="queryid"
            placeholder="Enter playlist id to play"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Submit type="submit" value="Load Playlist" />
        </Form>
      </Container>
    );
  }
}

export default Home;
