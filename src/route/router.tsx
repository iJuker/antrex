import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layout";

const Dashboard = lazy(()=>import('~/pages/dashboard'))

// Auth
const Login = lazy(()=>import('~/pages/auth/login'))
const Page404 = lazy(()=>import('~/pages/auth/404'))


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);