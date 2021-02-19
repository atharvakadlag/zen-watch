import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Form, Label, Text, Submit, Error } from "./Elements";

function Playlist() {
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
      return <Redirect to={`/playlist/${playid}`} />;
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

export default Playlist;
