import React from "react";
import styled from "styled-components";
import { Center } from "./Elements";

function Error404() {
  document.title =
    "Zen Watch - Watch youtube without overly exiting recommendations";
  return <Center>Sorry, we couldn't locate the page you requested</Center>;
}

export default Error404;
