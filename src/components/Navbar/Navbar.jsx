import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    navigate(`/browse/search?q=${e.target.value}`);
  };

  return (
    <NavContainer show={show}>
      <NavLogo
        alt="netflix logo"
        src={"https://cdn-icons-png.flaticon.com/512/5977/5977590.png"}
        onClick={() => navigate("/")}
      />
      <MenuContainer>
        <Horizontal>
          <Menu onClick={() => navigate("/browse")}>홈</Menu>
          <Menu onClick={() => navigate("/browse/genre")}>장르별</Menu>
        </Horizontal>
        <Vertical>
          <MenuUl className="menu">
            <MenuLi
              onMouseOver={() => setDropDown(true)}
              onMouseOut={() => setDropDown(false)}
            >
              메뉴▼
              <Depth className="depth_1" dropDown={dropDown}>
                <MenuLi>
                  <DepthMenu onClick={() => navigate("/browse")}>홈</DepthMenu>
                </MenuLi>
                <MenuLi>
                  <DepthMenu onClick={() => navigate("/browse/genre")}>
                    장르별
                  </DepthMenu>
                </MenuLi>
              </Depth>
            </MenuLi>
          </MenuUl>
        </Vertical>
      </MenuContainer>

      <OptionsContainer>
        <InputSerch
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="검색"
        />
        <NavUser
          alt="user logo"
          src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        />
      </OptionsContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
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
const NavLogo = styled.img`
  width: 70px;
  margin-left: 30px;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  display: flex;
  margin-right: auto;
`;
const Horizontal = styled.div`
  display: block;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;
const Vertical = styled.div`
  display: none;
  @media screen and (max-width: 860px) {
    display: block;
  }
`;
const MenuUl = styled.ul`
  list-style: none;
  display: block;
  content: "";
  clear: both;
  color: #fff;
`;
const MenuLi = styled.li`
  position: relative;
`;
const Depth = styled.ul`
  display: ${props => (props.dropDown === true ? "block" : "none")};
  position: absolute;
  left: -160px;
  text-align: center;
  opacity: 0.7;
  list-style: none;
`;
const DepthMenu = styled.a`
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
const Menu = styled.a`
  font-size: 1vw;
  color: #e5e5e5;
  padding-left: 20px;
  cursor: pointer;
`;
const OptionsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  color: white;
  padding-right: 30px;
`;
const InputSerch = styled.input`
  width: 15vw;
  padding: 7px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #000;
  margin-right: 20px;
`;
const NavUser = styled.img`
  width: 30px;
`;
