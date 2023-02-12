import { Outlet, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import NavContainer from "./containers/common/NavContainer";
import FooterContainer from "./containers/common/FooterContainer";
import ProfileManageForm from "./containers/ProfileForm/ProfileManageForm";
import PrivateRoute from "./lib/PrivateRoute";

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
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/browse"
          element={<PrivateRoute restricted={true} component={<Layout />} />}
        >
          <Route index element={<Home />} />
          <Route path="video" element={<Video />} />
          <Route path="genre" element={<Genre />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route
          path="/profile"
          element={<PrivateRoute restricted={true} component={<Profile />} />}
        />
        <Route
          path="/profile/manage"
          element={
            <PrivateRoute restricted={true} component={<ProfileManageForm />} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
