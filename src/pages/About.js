import React from "react";
import styled from "styled-components";
import { Center } from "./Elements";
import { Link } from "react-router-dom";
import {
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Icons = styled.div`
  margin: 2em 0;
`;
const FooterLink = styled(Link)`
  font-size: 2em;
  color: #42aee9;
  margin: 0 0.3em;
`;

function About() {
  document.title =
    "Zen Watch - Watch youtube without overly exiting recommendations";
  return (
    <Center>
      <div>
        <p>
          Hello, If you have been looking a way to concentrate on watching that
          important video on youtube without getting distracted by the funny cat
          videos, you have came at right place.
        </p>
        <p>
          Zen-Watch allows you to stream youtube videos without the annoying
          recommendations.
        </p>
        <p>Use the following links to know more about the developers</p>
        <Icons>
          <FooterLink
            to={{ pathname: "https://www.github.com/atharvakadlag" }}
            target="_blank"
          >
            <FaGithubAlt />
          </FooterLink>
          <FooterLink
            to={{ pathname: "https://www.linkedin.com/in/atharvakadlag" }}
            target="_blank"
          >
            <FaLinkedin />
          </FooterLink>
          <FooterLink
            to={{ pathname: "https://www.twitter.com/atharva_kadlag" }}
            target="_blank"
          >
            <FaTwitter />
          </FooterLink>
          <FooterLink
            to={{ pathname: "https://github.com/atharvakadlag" }}
            target="_blank"
          >
            <FaGlobe />
          </FooterLink>
          <FooterLink
            to={{ pathname: "mailto:atharvakadlag@gmail.com" }}
            target="_blank"
          >
            <FaEnvelope />
          </FooterLink>
        </Icons>
      </div>
    </Center>
  );
}

export default About;
