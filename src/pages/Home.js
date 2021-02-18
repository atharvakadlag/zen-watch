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
const Error = styled.p`
  color: red;
`;

function Home() {
  const [link, setLink] = useState("");
  const [playid, setPlayid] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isList, setList] = useState(false);
  const [hasError, setError] = useState(false);

  const validateSubmit = (e) => {
    e.preventDefault();

    // parse link
    try {
      let args = link.split("?")[1].split("&");
      let params = {};
      for (const str of args) {
        params[str.split("=")[0]] = str.split("=")[1];
      }
      if ("list" in params) {
        setPlayid(params["list"]);
        setList(true);
        setRedirect(true);
      }
      if ("v" in params) {
        console.log("is video");
      }
    } catch {
      setError(true);
    }
  };

  if (redirect) {
    if (isList) {
      return <Redirect to={`/video/${playid}`} />;
    }
  } else {
    return (
      <Container>
        <Form onSubmit={validateSubmit}>
          <Label htmlFor="link">Link:</Label>
          <Text
            type="text"
            name="link"
            id="linkid"
            placeholder="Enter youtube link to play"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Submit type="submit" value="Load Playlist" />
        </Form>
        <Error>{hasError ? "Link Invalid! Retry please." : ""}</Error>
      </Container>
    );
  }
}

export default Home;
