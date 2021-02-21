import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Navbar/SideBar";
import PlaylistBox from "./components/PlaylistBox/PlaylistBox";
import VideoBox from "./components/VideoBox/VideoBox";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Playlist from "./pages/Playlist";
import Video from "./pages/Video";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="container">
      <Router>
        <div className="main-wrapper">
          <SideBar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/playlist" exact component={Playlist}></Route>
            <Route
              path="/playlist/:listid"
              exact
              component={PlaylistBox}
            ></Route>
            <Route path="/video" exact component={Video}></Route>
            <Route path="/video/:videoid" exact component={VideoBox}></Route>
            <Route path="/404" exact component={Error404}></Route>
            <Redirect to="/404" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
