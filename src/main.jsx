import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./routes/Router.jsx";
import { RouterProvider } from "react-router";
import HomePageLayout from "./layout/HomePageLayout.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </AuthProvider>
);
