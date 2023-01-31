import { Outlet, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Search from "./pages/Search";
import NavContainer from "./containers/NavContainer";
import FooterContainer from "./containers/FooterContainer";

const Layout = () => {
  return (
    <div>
      <NavContainer />
      <Outlet />
      <FooterContainer />
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/browse" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Home />} />
          <Route path="genre" element={<Genre />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
