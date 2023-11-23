import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainWrapper from "./MainWrapper";
import Beranda from "./Beranda";
import DetailKostView from "./DetailKostView";
import { CariKostView } from "./CariKostView";
import FavoritKostView from "./FavoritKostView";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/detail-kost" element={<DetailKostView />} />
          <Route path="/cari-kost" element={<CariKostView />} />
          <Route path="/favorit-kost" element={<FavoritKostView />} />
        </Route>
      </>,
    ),
  );
  return <RouterProvider router={routes} />;
};

export default App;
