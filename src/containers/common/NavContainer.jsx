import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";

export default function NavContainer() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useUserInfo(localStorage.getItem("account"));
  
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

  const handleClick = (path,state) => {
    navigate(path, state);
  };

  const LogoutClick = () => {
    localStorage.removeItem("token_");
    localStorage.removeItem("account");
    navigate("/signin");
  };

  return (
    <>
      {data && (
        <Navbar
          show={show}
          handleChange={handleChange}
          handleClick={handleClick}
          userInfo={data}
          LogoutClick={LogoutClick}
        />
      )}
    </>
  );
}
