import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: #2a2e32;
  height: 3em;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1vw;
  z-index: 10;
`;
export const NavLink = styled(Link)`
  color: #42aee9;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0.5em;
  font-size: 1.2em;
  border-radius: 0.2em;

  &:hover {
    color: #15cdfc;
    transition: 0.3s ease-in-out;
  }
`;
export const NavBrand = styled(Link)`
  color: rgb(138, 207, 245);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin: 2px;
  font-size: 1.5em;
  font-weight: 600;

  &:active {
    color: #15cdfc;
    transition: 0.3s ease-in-out;
  }
`;
export const Logo = styled.img`
  height: 120%;
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #42aee9;
  height: 2em;
  width: 2em;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
    background-color: red;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 25px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #106066;
    background-color: $fff;
  }
`;
