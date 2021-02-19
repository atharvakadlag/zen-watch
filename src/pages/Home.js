import React from "react";
import { Link } from "react-router-dom";

// TODO create a proper home page

function Home() {
  return (
    <div>
      <Link to="/playlist">Playlist</Link>
    </div>
  );
}

export default Home;
