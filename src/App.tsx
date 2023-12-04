import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Beranda from "@/pages/Beranda";
import MainWrapper from "@/layouts/MainWrapper";
import DetailKostView from "@/views/DetailKostView";
import CariKostView from "@/views/CariKostView";
import FavoritKostView from "@/views/FavoritKostView";
import CreateKostView from "@/views/CreateKostView";
import SyaratKetentuanKostView from "@/views/SyaratKetentuanKostView";
import KebijakanPrivasiKostView from "@/views/KebijakanPrivasiKostView";
import Login from "@/auth/Login";
import Register from "@/auth/Register";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const PrivateRoute = ({ element, ...props }) => {
    return isLoggedIn ? (
      React.cloneElement(element, props)
    ) : (
      <Navigate to="/login" replace state={{ from: props.location }} />
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainWrapper />}>
          <Route path="/" element={<PrivateRoute element={<Beranda />} />} />
          <Route
            path="/create-kost"
            element={<PrivateRoute element={<CreateKostView />} />}
          />
          <Route
            path="/detail-kost/:id"
            element={<PrivateRoute element={<DetailKostView />} />}
          />
          <Route
            path="/cari-kost"
            element={<PrivateRoute element={<CariKostView />} />}
          />
          <Route
            path="/favorit-kost"
            element={<PrivateRoute element={<FavoritKostView />} />}
          />
          <Route
            path="/syarat-ketentuan-kost"
            element={<PrivateRoute element={<SyaratKetentuanKostView />} />}
          />
          <Route
            path="/kebijakan-privasi-kost"
            element={<PrivateRoute element={<KebijakanPrivasiKostView />} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
