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

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/detail-kost" element={<DetailKostView />} />
          <Route path="/cari-kost" element={<CariKostView />} />
        </Route>
      </>,
    ),
  );
  return <RouterProvider router={routes} />;
};

export default App;
