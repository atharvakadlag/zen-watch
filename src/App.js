import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import SideBar from "./components/Navbar/SideBar.js";
import Home from "./pages/Home.js";
import Video from "./pages/Video.js";
import Error404 from "./pages/Error404.js";
import VideoBox from "./components/VideoBox/VideoBox.js";
import Subject from "./pages/Subject";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const sendQUery = (query) => {};

  return (
    <div className="container">
      <Router>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/video/:listid" exact component={Video}></Route>
          <Route path="/subject/:name" exact component={Subject}></Route>
          <Route path="/404" exact component={Error404}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
