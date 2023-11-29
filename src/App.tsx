import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Beranda from "./pages/Beranda";
import MainWrapper from "./layouts/MainWrapper";
import DetailKostView from "./views/DetailKostView";
import CariKostView from "./views/CariKostView";
import FavoritKostView from "./views/FavoritKostView";
import CreateKostView from "./views/CreateKostView";
import SyaratKetentuanKostView from "./views/SyaratKetentuanKostView";
import KebijakanPrivasiKostView from "./views/KebijakanPrivasiKostView";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/create-kost" element={<CreateKostView />} />
          <Route path="/detail-kost/:id" element={<DetailKostView />} />
          <Route path="/cari-kost" element={<CariKostView />} />
          <Route path="/favorit-kost" element={<FavoritKostView />} />
          <Route
            path="/syarat-ketentuan-kost"
            element={<SyaratKetentuanKostView />}
          />
          <Route
            path="/kebijakan-privasi-kost"
            element={<KebijakanPrivasiKostView />}
          />
        </Route>
      </>,
    ),
  );
  return <RouterProvider router={routes} />;
};

export default App;
