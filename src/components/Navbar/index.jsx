import React from "react";
import {
  NavContainer,
  NavLogo,
  MenuContainer,
  Horizontal,
  Vertical,
  Menu,
  OptionsContainer,
  InputSerch,
  NavUser,
  UserContainer,
  MenuDown,
  UserDown,
  Dropdown,
  DropdownContent,
  DropLink,
  NavUserText,
} from "./styles";
import userIcon from "../../assets/image/user.svg";

export default function Navbar({ show, handleChange, handleClick, userInfo }) {
 
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
          <Dropdown>
            <MenuDown>메뉴▼</MenuDown>
            <DropdownContent>
              <DropLink
                center={"center"}
                onClick={() => handleClick("/browse")}
              >
                홈
              </DropLink>
              <DropLink
                center={"center"}
                onClick={() => handleClick("/browse/genre")}
              >
                장르별
              </DropLink>
            </DropdownContent>
          </Dropdown>
        </Vertical>
      </MenuContainer>
      <OptionsContainer>
        <InputSerch type="text" onChange={handleChange} placeholder="검색" />
        <Dropdown>
          <NavUser
            alt="user"
            src={`https://mandarin.api.weniv.co.kr/${userInfo.profile.image}`}
          />
          <UserDown>▼</UserDown>
          <DropdownContent>
            <DropLink>
              <UserContainer>
                <NavUser
                  alt="user"
                  src={`https://mandarin.api.weniv.co.kr/${userInfo.profile.image}`}
                />
                <NavUserText>{userInfo.profile.username}</NavUserText>
                <NavUserText>{userInfo.profile.accountname}</NavUserText>
              </UserContainer>
            </DropLink>
            <DropLink>
              <UserContainer
                onClick={() => handleClick("/profile", { state: userInfo })}
              >
                <NavUser alt={"user"} src={userIcon} />
                <NavUserText>계정 정보</NavUserText>
              </UserContainer>
            </DropLink>
            <DropLink>넷플릭스에서 나가기</DropLink>
          </DropdownContent>
        </Dropdown>
      </OptionsContainer>
    </NavContainer>
  );
}
