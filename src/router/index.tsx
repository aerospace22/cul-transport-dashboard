import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoadComponent } from "@/components/LoadComponent";

/**
 * Layouts
 */
import { AuthLayout, DashboardLayout } from "@/layouts";

/**
 * Utility Pages
 */
const MaintenancePage = LoadComponent(React.lazy(() => import("@/views/MaintenancePage")));

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
const BusVehiclesManagePage = LoadComponent(React.lazy(() => import("@/views/dashboard/bus-management/bus-vehicles/BusVehiclesManagePage")));
const BusRoutesManagePage = LoadComponent(React.lazy(() => import("@/views/dashboard/bus-management/bus-routes/BusRoutesManagePage")));
const BusRouteFormPage = LoadComponent(React.lazy(() => import("@/views/dashboard/bus-management/bus-routes/BusRouteFormPage")));
const BusBookingsManagePage = LoadComponent(React.lazy(() => import("@/views/dashboard/bus-management/bus-bookings/BusBookingsManagePage")));
const PaymentsLogManagePage = LoadComponent(React.lazy(() => import("@/views/dashboard/payments-management/payments-log/PaymentsLogManagePage")));
const PaymongoReferenceManagePage = LoadComponent(
  React.lazy(() => import("@/views/dashboard/payments-management/paymongo-reference/PaymongoReferenceManagePage"))
);
const StaffAccountsManagePage = LoadComponent(
  React.lazy(() => import("@/views/dashboard/accounts-management/staff-accounts/StaffAccountsManagePage"))
);
const CustomerAccountsManagePage = LoadComponent(
  React.lazy(() => import("@/views/dashboard/accounts-management/customer-accounts/CustomerAccountsManagePage"))
);

export default createBrowserRouter([
  {
    path: "*",
    element: MaintenancePage,
  },
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
      {
        path: "/dashboard/bus-vehicles",
        element: BusVehiclesManagePage,
      },
      {
        path: "/dashboard/bus-routes",
        element: BusRoutesManagePage,
      },
      {
        path: "/dashboard/bus-routes/form",
        element: BusRouteFormPage,
      },
      {
        path: "/dashboard/bus-bookings",
        element: BusBookingsManagePage,
      },
      {
        path: "/dashboard/payments-log",
        element: PaymentsLogManagePage,
      },
      {
        path: "/dashboard/paymongo-reference",
        element: PaymongoReferenceManagePage,
      },
      {
        path: "/dashboard/staff-accounts",
        element: StaffAccountsManagePage,
      },
      {
        path: "/dashboard/customer-accounts",
        element: CustomerAccountsManagePage,
      },
    ],
  },
]);
