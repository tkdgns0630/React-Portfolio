import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navigation />
      </header>

      <Outlet />

      <Footer />
    </div>
  );
}

export default RootLayout;
