import React from "react";
import { Link } from "react-router-dom";
import UNDER_DEV_LOGO from "@/assets/under-construction.png";

const MaintenancePage: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-slate-200 flex flex-col justify-center items-center gap-8">
      <img src={UNDER_DEV_LOGO} alt="under-constructin.png" className="w-[200px] h-[200px]" />
      <h1 className="text-xl font-bold">UNDER DEVELOPMENT/MAINTENANCE</h1>

      <Link to="/dashboard/overview" className="text-blue-700 underline">
        Back to dashboard
      </Link>
    </div>
  );
};

export default MaintenancePage;
