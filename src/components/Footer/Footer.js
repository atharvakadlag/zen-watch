import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Container = styled.div`
  background-color: #2a2e32;
  text-align: center;
  color: #42aee9;
  padding: 1em;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 15vh;
`;
const Icons = styled.div``;
const FooterLink = styled(Link)`
  font-size: 3em;
  color: #42aee9;
  margin: 0 0.3em;
`;

function Footer() {
  return (
    <Container>
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
          to={{ pathname: "mailto:atharvakadlag@gmail.com" }}
          target="_blank"
        >
          <FaEnvelope />
        </FooterLink>
      </Icons>
      <span>&copy;</span> 2020-21 Atharva Kadlag
    </Container>
  );
}

export default Footer;
