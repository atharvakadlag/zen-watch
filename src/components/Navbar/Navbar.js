import {
  Nav,
  NavLink,
  NavBrand,
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
        <NavBrand to="/">
          <Logo src={logo} alt="logo" />
          <p>ZenWatch</p>
        </NavBrand>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/playlist">ZenWatch playlist</NavLink>
          <NavLink to="/video">ZenWatch video</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
