import {
  Container,
  Icon,
  CloseIcon,
  Side,
  SideBarMenu,
  SideBarLink,
  SideBarBtn,
  SideBarBtnLink,
} from "./SideBarElements.js";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Side>
        <SideBarMenu>
          <SideBarLink
            to={{ pathname: "https://atharvakadlag.github.io" }}
            target="_blank"
          >
            About Me
          </SideBarLink>
          <SideBarLink to="/playlist">Playlist</SideBarLink>
        </SideBarMenu>
      </Side>
    </Container>
  );
};

export default SideBar;
