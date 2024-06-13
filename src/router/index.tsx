import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoadComponent } from "@/components/LoadComponent";

/**
 * Layouts
 */
import { AuthLayout, DashboardLayout } from "@/layouts";

/**
 * Auth Pages
 */
const LoginPage = LoadComponent(React.lazy(() => import("@/views/auth/LoginPage")));
const ForgotPasswordPage = LoadComponent(React.lazy(() => import("@/views/auth/ForgotPasswordPage")));
const ResetPasswordPage = LoadComponent(React.lazy(() => import("@/views/auth/ResetPasswordPage")));

/**
 * Dashboard Pages
 */
const OverviewPage = LoadComponent(React.lazy(() => import("@/views/dashboard/OverviewPage")));
const BusDriversManagePage = LoadComponent(React.lazy(() => import("@/views/dashboard/bus-management/bus-drivers/BusDriversManagePage")));
const BusConductorsManagePage = LoadComponent(React.lazy(() => import("@/views/dashboard/bus-management/bus-conductors/BusConductorsManagePage")));

export default createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: LoginPage,
      },
      {
        path: "/auth/forgot-password",
        element: ForgotPasswordPage,
      },
      {
        path: "/auth/reset-password",
        element: ResetPasswordPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: OverviewPage,
      },
      {
        path: "/dashboard/bus-drivers",
        element: BusDriversManagePage,
      },
      {
        path: "/dashboard/bus-conductors",
        element: BusConductorsManagePage,
      },
    ],
  },
]);