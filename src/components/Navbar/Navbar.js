import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from "./NavbarElements.js";
import logo from "../../images/logo.svg";

function Navbar({ toggle }) {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <Logo src={logo} alt="logo" />
          <h1>ZenWatch</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink
            to={{ pathname: "https://atharvakadlag.github.io" }}
            target="_blank"
          >
            About Me
          </NavLink>
          <NavLink to="/playlist">Playlist</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
