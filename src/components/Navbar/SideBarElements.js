import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const Container = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: #2a2e32;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #42aee9;
`;

export const Icon = styled.div`
  color: #42aee9;
  height: 2em;
  width: 2em;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
`;

export const Side = styled.div``;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 480) {
    grid-template-rows: repeat(6, 40px);
  }
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #42aee9;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    transition: 0.3s ease-in-out;
  }
`;
