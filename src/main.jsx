import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/HomePage";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import React from "react";

// layouts
import RootLayout from "./layouts/RootLayout";
// import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="experience" element={<Experience />} />
      <Route path="Projects" element={<Projects />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.Fragment>
);
