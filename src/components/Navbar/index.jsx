import React from "react";
import {
  NavContainer,
  NavLogo,
  MenuContainer,
  Horizontal,
  Vertical,
  Menu,
  MenuUl,
  MenuLi,
  Depth,
  DepthMenu,
  OptionsContainer,
  InputSerch,
  NavUser,
} from "./styles";

export default function Navbar({ show, dropDown, setDropDown, handleChange, handleClick, image }) {
  return (
    <NavContainer show={show}>
      <NavLogo
        alt="netflix logo"
        src={"https://cdn-icons-png.flaticon.com/512/5977/5977590.png"}
      />
      <MenuContainer>
        <Horizontal>
          <Menu onClick={() => handleClick("/browse")}>홈</Menu>
          <Menu onClick={() => handleClick("/browse/genre")}>장르별</Menu>
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
                  <DepthMenu onClick={() => handleClick("/browse")}>
                    홈
                  </DepthMenu>
                </MenuLi>
                <MenuLi>
                  <DepthMenu onClick={() => handleClick("/browse/genre")}>
                    장르별
                  </DepthMenu>
                </MenuLi>
              </Depth>
            </MenuLi>
          </MenuUl>
        </Vertical>
      </MenuContainer>
      <OptionsContainer>
        <InputSerch type="text" onChange={handleChange} placeholder="검색" />

         <MenuUl className="menu">
          <MenuLi
            onMouseOver={() => setDropDown(true)}
            onMouseOut={() => setDropDown(false)}
          >
            <NavUser
              alt="user logo"
              src={`https://mandarin.api.weniv.co.kr/${image}`}
            />
            ▼
            <Depth className="depth_1" dropDown={dropDown}>
              <MenuLi>
                <DepthMenu onClick={() => handleClick("/browse")}>홈</DepthMenu>
              </MenuLi>
              <MenuLi>
                <DepthMenu onClick={() => handleClick("/browse/genre")}>
                  장르별
                </DepthMenu>
              </MenuLi>
            </Depth>
          </MenuLi>
        </MenuUl> 
      </OptionsContainer>
    </NavContainer>
  );
}