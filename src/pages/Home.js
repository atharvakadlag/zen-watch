import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.svg";
import rreln from "../images/rreln.jpg";
import asmp from "../images/asmp.jpg";
import sorting from "../images/sorting.jpg";

// TODO create a proper home page
const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(NavLink)`
  width: 200px;
  display: block;
  color: black;
  transition: 0.3s;
  margin: 10px 10px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
`;
const CardThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const CardTitle = styled.p`
  font-size: 1.2em;
  font-weight: 700;
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
    <div>
      <CardContainer>
        <LinkCard to="/playlist" img={logo} title="ZenWatch a Playlist" />
        <LinkCard to="/video" img={logo} title="ZenWatch a Video" />
      </CardContainer>
      <CardContainer>
        <LinkCard
          to="/playlist/PL4R4pCdBwe_b-aPiD8OBx910hR2zUTNy9"
          img={asmp}
          title="Asymptotic Analysis"
        />
        <LinkCard
          to="/playlist/PL4R4pCdBwe_ZSSknwW68XT4rHA1Fff1zH"
          img={rreln}
          title="Recurrence Relations"
        />
        <LinkCard
          to="/playlist/PL4R4pCdBwe_YN1lnCAeMBcDsiZ3yi3gOc"
          img={sorting}
          title="Sorting"
        />
      </CardContainer>
    </div>
  );
}

export default Home;
