import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Label, Text, Submit, Error } from "./Elements";

function Playlist() {
  const [playid, setPlayid] = useState("");

  const [link, setLink] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

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
        setRedirect(true);
      } else {
        if ("v" in params) {
          setError(
            "Are you trying to play a video? If so, kindly switch to video tab."
          );
        }
      }
    } catch {
      setError("Link Invalid! Retry please.");
    }
  };

  if (redirect) {
    return <Redirect to={`/playlist/${playid}`} />;
  } else {
    return (
      <Container>
        <Form onSubmit={validateSubmit}>
          <Text
            type="text"
            name="link"
            id="linkid"
            placeholder="Enter youtube playlist link to play"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Submit type="submit" value="Load Playlist" />
        </Form>
        <Error>{error}</Error>
      </Container>
    );
  }
}

export default Playlist;
