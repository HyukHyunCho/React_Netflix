import { Outlet, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Home />} />
          <Route path="search" element={<Search />} />
          {/* <Route path=":movieId" element={<Detail />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
