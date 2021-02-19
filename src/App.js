import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Navbar/SideBar";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Playlist from "./pages/Playlist";
import PlaylistBox from "./components/PlaylistBox/PlaylistBox";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="container">
      <Router>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/playlist" exact component={Playlist}></Route>
          <Route path="/playlist/:listid" exact component={PlaylistBox}></Route>
          <Route path="/404" exact component={Error404}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
