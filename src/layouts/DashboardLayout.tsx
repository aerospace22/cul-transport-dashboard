import React from "react";
import { Outlet, Link } from "react-router-dom";
import { LuHome, LuUsers2, LuBus, LuMap, LuTicket, LuFileSpreadsheet, LuCloudFog, LuUserCog } from "react-icons/lu";
import { useAuth } from "@/hooks";
import BRAND_LOGO from "@/assets/cul-transport-logo.png";

const ICON_SIZE = 18;

const linkGroups = [
  {
    groupName: "Overview",
    children: [
      {
        label: "Dashboard Statistics",
        to: "/dashboard/overview",
        icon: <LuHome size={ICON_SIZE} />,
      },
    ],
  },
  {
    groupName: "Manage",
    children: [
      {
        label: "Bus Drivers",
        to: "/dashboard/bus-drivers",
        icon: <LuUsers2 size={ICON_SIZE} />,
      },
      {
        label: "Bus Conductors",
        to: "/dashboard/bus-conductors",
        icon: <LuUsers2 size={ICON_SIZE} />,
      },
      {
        label: "Bus Vehicles",
        to: "/dashboard/bus-vehicles",
        icon: <LuBus size={ICON_SIZE} />,
      },
      {
        label: "Bus Routes",
        to: "/dashboard/bus-routes",
        icon: <LuMap size={ICON_SIZE} />,
      },
      {
        label: "Bus Bookings",
        to: "/dashboard/bus-bookings",
        icon: <LuTicket size={ICON_SIZE} />,
      },
    ],
  },
  {
    groupName: "Transactions",
    children: [
      {
        label: "Payments Log",
        to: "/dashboard/payments-log",
        icon: <LuFileSpreadsheet size={ICON_SIZE} />,
      },
      {
        label: "Paymongo Reference",
        to: "/dashboard/paymongo-reference",
        icon: <LuCloudFog size={ICON_SIZE} />,
      },
    ],
  },
  {
    groupName: "Utilities",
    children: [
      {
        label: "Staff Accounts",
        to: "/dashboard/staff-accounts",
        icon: <LuUserCog size={ICON_SIZE} />,
      },
      {
        label: "Customer Accounts",
        to: "/dashboard/customer-accounts",
        icon: <LuUserCog size={ICON_SIZE} />,
      },
    ],
  },
];

export const DashboardLayout: React.FC = () => {
  const auth = useAuth();

  console.log(auth);

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="w-[300px] h-screen bg-slate-900 border-r-2 border-gray-100 fixed top-0 left-0">
        <div className="py-5">
          <div className="w-full h-auth flex justify-center items-center">
            <h1 className="text-xl text-white font-medium">CUL Bus Transport</h1>
            {/* <img src={BRAND_LOGO} className="h-auto w-[160px]" alt="cul-transport-logo.png" /> */}
          </div>

          <div className="flex flex-col gap-5 mt-10">
            {linkGroups.map((group) => (
              <div className="flex flex-col gap-1" key={group.groupName}>
                <p className="text-xs text-slate-500 font-medium ml-5">{group.groupName}</p>
                {group.children.map((child) => (
                  <Link
                    to={child.to}
                    className="text-xs text-gray-400 font-medium flex flex-row gap-3 items-center hover:bg-slate-800 hover:text-white py-3 px-3 pl-5"
                    key={child.to}
                  >
                    {child.icon} <span className="mt-1">{child.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-full w-full ml-[300px]">
        <div className="h-[60px] w-[calc(100%-300px)] bg-white flex flex-row justify-between items-center border-b-2 border-gray-100 fixed top-0 px-5">
          <div></div>
          <div className="!text-sm flex flex-row gap-5">
            <Link to="/dashboard/account-settings" className="text-gray-500 hover:text-gray-800">
              My Account
            </Link>
            <button className="text-red-700">Log Out</button>
          </div>
        </div>

        <div className="h-full pt-[200px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
