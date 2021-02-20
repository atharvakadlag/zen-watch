import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Label, Text, Submit, Error } from "./Elements";

function Video() {
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
      if ("v" in params) {
        setPlayid(params["v"]);
        setRedirect(true);
      } else {
        if ("list" in params) {
          setError(
            "Are you trying to play a playlist? If so, kindly switch to playlist tab."
          );
        }
      }
    } catch {
      setError("Link Invalid! Retry please.");
    }
  };

  if (redirect) {
    return <Redirect to={`/video/${playid}`} />;
  } else {
    return (
      <Container>
        <Form onSubmit={validateSubmit}>
          <Text
            type="text"
            name="link"
            id="linkid"
            placeholder="Enter youtube video link to play"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Submit type="submit" value="Load Video" />
        </Form>
        <Error>{error}</Error>
      </Container>
    );
  }
}

export default Video;
