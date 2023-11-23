import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainWrapper from "./MainWrapper";
import Beranda from "./Beranda";
import DetailKosView from "./DetailKosView";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/detail-kos" element={<DetailKosView />} />
        </Route>
      </>,
    ),
  );
  return <RouterProvider router={routes} />;
};

export default App;
