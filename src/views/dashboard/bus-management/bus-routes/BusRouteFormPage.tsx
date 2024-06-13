import React from "react";
import { Card } from "antd";
import { PageHeader } from "@/components/shared";
import { BusRouteForm } from "@/components/domains/dashboard";

const BusRouteFormPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Bus Routes"
        subtitle="Manage bus routes for bookings (departure/arrival destination)"
        breadcrumbs={["Manage Bus Routes"]}
      ></PageHeader>

      <div className="px-5">
        <Card className="w-full min-h-[100px]">
          <BusRouteForm />
        </Card>
      </div>
    </>
  );
};

export default BusRouteFormPage;
