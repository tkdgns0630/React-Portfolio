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
import ProjectList from "./components/ProjectList";
import ErrorPage from "./pages/ErrorPage";
import React from "react";
import ProjectDisplay from "./pages/ProjectDisaplay";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// layouts
import RootLayout from "./layouts/RootLayout";
// import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/React-Portfolio/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/React-Portfolio/experience" element={<Experience />} />
      <Route path="/React-Portfolio/project/:id" element={<ProjectDisplay />} />
      <Route path="/React-Portfolio/projects" element={<ProjectList />} />
      <Route path="/React-Portfolio/resume" element={<Resume />} />
      <Route path="/React-Portfolio/contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.Fragment>
);
