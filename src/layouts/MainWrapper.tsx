import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainWrapper = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainWrapper;
