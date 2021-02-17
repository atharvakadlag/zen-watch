import React from "react";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  position: absolute;
  margin-top: 10vh;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 2em;
  color: #42aee9;
  font-weight: 700;
`;

function Error404() {
  return <Center>Sorry, we couldn't locate the page you requested</Center>;
}

export default Error404;
