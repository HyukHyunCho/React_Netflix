import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Nav() {
  const [show, setShow] = useState(false);

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

  return (
    <NavContainer show={show}>
      <InputSerch type="text" placeholder="검색" />
      <NavLogo
        alt="netflix logo"
        src={"https://cdn-icons-png.flaticon.com/512/5977/5977590.png"}
        onClick={() => window.location.reload()}
      />
      <NavUser
        alt="user logo"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
      />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${props => props.show && "#111"};
`;

const NavLogo = styled.img`
  position: fixed;
  left: 40px;
  width: 80px;
`;

const InputSerch = styled.input`
  position: fixed;
  right: 80px;
  width: 15vw;
  padding: 7px;
  color: #fff;
  border: 1px solid #fff;
  background: #000;
`;

const NavUser = styled.img`
  position: fixed;
  right: 40px;
  width: 30px;
`;

