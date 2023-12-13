import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainWrapper from "@/layouts/MainWrapper";

import Login from "@/auth/user/Login";
import Register from "@/auth/user/Register";

import Beranda from "@/pages/Beranda";
import DetailKostView from "@/views/DetailKostView";
import SearchKostView from "@/views/SearchKostView";
import FavoritKostView from "@/views/FavoritKostView";
import SyaratKetentuanKostView from "@/views/SyaratKetentuanKostView";
import KebijakanPrivasiKostView from "@/views/KebijakanPrivasiKostView";

import DashboardWrapper from "@/layouts/DashboardWrapper";

import LoginAdmin from "@/auth/admin/LoginAdmin";

import CreateKostView from "@/views/CreateKostView";
import EditKostView from "@/views/EditKostView";
import EditKost from "@/views/EditKost";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin-login" element={<LoginAdmin />} />

        <Route element={<DashboardWrapper />}>
          <Route path="create-kost" element={<CreateKostView />} />
          <Route path="edit-kost-view" element={<EditKostView />} />
          <Route path="edit-kost/:id" element={<EditKost />} />
        </Route>

        <Route element={<MainWrapper />}>
          <Route path="/" element={<Beranda />} />
          <Route path="detail-kost/:id" element={<DetailKostView />} />
          <Route path="search-kost" element={<SearchKostView />} />
          <Route path="favorit-kost" element={<FavoritKostView />} />
          <Route
            path="syarat-ketentuan-kost"
            element={<SyaratKetentuanKostView />}
          />
          <Route
            path="kebijakan-privasi-kost"
            element={<KebijakanPrivasiKostView />}
          />
        </Route>
      </>,
    ),
  );
  return <RouterProvider router={routes} />;
};

export default App;
