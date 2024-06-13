import React from "react";
import { Card } from "antd";
import { PageHeader } from "@/components/shared";

const OverviewPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Overview" subtitle="View all statistics data in the system" breadcrumbs={["Overview"]} />

      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8 px-5">
          <Card className="w-full min-h-[100px]">
            <h1 className="text-md text-gray-600 font-medium">Drivers</h1>
          </Card>
          <Card className="w-full min-h-[100px]">
            <h1 className="text-md text-gray-600 font-medium">Conductors</h1>
          </Card>
          <Card className="w-full min-h-[100px]">
            <h1 className="text-md text-gray-600 font-medium">Bus Vehicles</h1>
          </Card>
          <Card className="w-full min-h-[100px]">
            <h1 className="text-md text-gray-600 font-medium">Bus Routes</h1>
          </Card>
        </div>
        <div className="flex flex-row gap-8 px-5">
          <Card className="w-3/5 min-h-[100px]">
            <h1 className="text-md text-gray-600 font-medium">Recent Booking Transactions</h1>
          </Card>
          <Card className="w-2/5 min-h-[100px]">
            <h1 className="text-md text-gray-600 font-medium">Bus Routes</h1>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
