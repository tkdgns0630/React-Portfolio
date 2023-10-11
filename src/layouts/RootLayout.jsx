import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
