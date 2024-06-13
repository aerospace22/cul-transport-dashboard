import React from "react";
import { Card } from "antd";
import { PageHeader } from "@/components/shared";

const BusRouteFormPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Bus Routes"
        subtitle="Manage bus routes for bookings (departure/arrival destination)"
        breadcrumbs={["Manage Bus Routes"]}
      ></PageHeader>

      <div className="px-5">
        <Card className="w-1/2 min-h-[100px]">
          <h1 className="text-md font-medium">Route Details</h1>
        </Card>
      </div>
    </>
  );
};

export default BusRouteFormPage;
