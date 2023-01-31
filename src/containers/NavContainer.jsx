import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useImage } from "../hooks/useAuth";
import Navbar from "../components/Navbar";

export default function NavContainer() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const { data, isLoading, isError, error } = useImage("1675110549570.jpg");

  console.log(data);

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

  const handleClick = path => {
    navigate(path);
  };

  return (
    <Navbar
      show={show}
      dropDown={dropDown}
      setDropDown={setDropDown}
      handleChange={handleChange}
      handleClick={handleClick}
      image={"1675110549570.jpg"}
    />
  );
}
