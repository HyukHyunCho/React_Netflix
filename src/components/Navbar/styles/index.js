import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 50px;
  z-index: 10000;
  padding-top: 10px;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${props => props.show && "#111"};
`;
export const NavLogo = styled.img`
  width: 70px;
  margin-left: 30px;
  cursor: pointer;
`;
export const MenuContainer = styled.div`
  display: flex;
  margin-right: auto;
`;
export const Horizontal = styled.div`
  display: block;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;
export const Vertical = styled.div`
  display: none;
  @media screen and (max-width: 860px) {
    display: block;
  }
`;
export const MenuUl = styled.ul`
  list-style: none;
  display: block;
  content: "";
  clear: both;
  color: #fff;
`;
export const MenuLi = styled.li`
  position: relative;
`;
export const Depth = styled.ul`
  display: ${props => (props.dropDown === true ? "block" : "none")};
  position: absolute;
  left: -160px;
  text-align: center;
  opacity: 0.7;
  list-style: none;
`;
export const DepthMenu = styled.a`
  display: block;
  width: 300px;
  padding: 5px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  background: #000;
  &:hover {
    background-color: #191919;
  }
`;
export const Menu = styled.a`
  font-size: 1vw;
  color: #e5e5e5;
  padding-left: 20px;
  cursor: pointer;
`;
export const OptionsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  color: white;
  padding-right: 30px;
`;
export const InputSerch = styled.input`
  width: 15vw;
  padding: 7px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #000;
  margin-right: 20px;
`;
export const NavUser = styled.img`
  width: 30px;
`;
