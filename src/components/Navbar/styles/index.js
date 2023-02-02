import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  z-index: 10000;
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
  padding-right: 50px;
`;
export const InputSerch = styled.input`
  width: 15vw;
  padding: 7px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #000;
`;
export const Dropdown = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  height: 32px;
  padding: 10px;
`;
export const DropdownContent = styled.div`
  position: absolute;
  top: 45px;
  right: -30px;
  display: none;
  background-color: #000;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;
export const DropLink = styled.a`
  display: block;
  color: #fff;
  padding: 10px;
  text-align: ${props => (props.center === "center" ? "center" : "left")}; 
  font-size: 12px;
  &:hover {
    background-color: #222;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
export const NavUser = styled.img`
  width: 32px;
  border-radius: 5px;
  `;
export const NavUserText = styled.p`
  margin-left: 10px;
`
export const MenuDown = styled.p`
  margin: 7px;
  font-size: 12px;
  color: #fff;
`;
export const UserDown = styled(MenuDown)`
  ${Dropdown}:hover & {
    transform: rotate(180deg);
    transition: 0.3s;
  }
`;




