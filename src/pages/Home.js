import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Elements";
import logo from "../images/logo.svg";

// TODO create a proper home page
const CardContainer = styled.div`
  margin: 2em 5em;
  display: flex;

  @media screen and (max-width: 768px) {
    margin: 2em 2em;
  }
`;

const Card = styled(NavLink)`
  width: 300px;
  display: block;
  color: black;
  transition: 0.3s;
  margin: 0px 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
`;
const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const CardTitle = styled.h1`
  width: 100%;
  border-radius: 10px;
`;

function LinkCard({ to = "", title = "", img = { logo } }) {
  return (
    <Card to={to}>
      <CardThumbnail src={img} alt="Thumbnail" />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
}

function Home() {
  return (
    <CardContainer>
      <LinkCard
        to="/playlist/PL4R4pCdBwe_b-aPiD8OBx910hR2zUTNy9"
        img={logo}
        title="Asymptotic Analysis"
      />
      <LinkCard
        to="/playlist/PL4R4pCdBwe_ZSSknwW68XT4rHA1Fff1zH"
        img={logo}
        title="Recurrence Relations"
      />
      <LinkCard
        to="/playlist/PL4R4pCdBwe_YN1lnCAeMBcDsiZ3yi3gOc"
        img={logo}
        title="Sorting"
      />
    </CardContainer>
  );
}

export default Home;
