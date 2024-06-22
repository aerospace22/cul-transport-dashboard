import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, Button, Modal } from "antd";
import { BusBusRoutesService } from "@/services";
import { PageHeader, TableBuilder } from "@/components/shared";

const BusRoutesManagePage: React.FC = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["bus-routes"],
    queryFn: async () => BusBusRoutesService.getBusRoutesList(),
  });

  const handleUpdate = (rowData: any) => {
    console.log(rowData);
  };

  const handleDelete = (rowId: number) => {
    Modal.confirm({
      title: "Confirm",
      content: "Do you confirm to delete this record?",
      async onOk() {
        await BusBusRoutesService.deleteBusRoute(rowId).finally(() => refetch());
      },
      onCancel() {
        //
      },
    });
  };

  const columns = [
    {
      name: "#",
      sortable: true,
      selector: (row: any) => row.id,
    },
    {
      name: "Assigned Bus",
      sortable: true,
      selector: (row: any) => row.bus.busNo,
    },
    {
      name: "Assigned Bus Driver",
      sortable: true,
      selector: (row: any) => row.bus.busDriver.fullname,
    },
    {
      name: "Assigned Bus Conductor",
      sortable: true,
      selector: (row: any) => row.bus.busConductor.fullname,
    },
    {
      name: "Route From",
      sortable: true,
      selector: (row: any) => row.routeFrom,
    },
    {
      name: "Route To",
      sortable: true,
      selector: (row: any) => row.routeTo,
    },
    {
      name: "Departure Date & Time",
      sortable: true,
      selector: (row: any) => `${row.departureDate} - ${row.departureTime}`,
    },
    {
      name: "Arrival Date & Time",
      sortable: true,
      selector: (row: any) => `${row.arrivalDate} - ${row.arrivalTime}`,
    },
    {
      name: "Actions",
      right: true,
      cell: (row: any) => {
        return (
          <div className="flex flex-row gap-6">
            <button className="font-medium" onClick={() => handleUpdate(row)}>
              Update
            </button>
            <button className="text-red-700 font-medium" onClick={() => handleDelete(row.id)}>
              Remove
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader
        title="Bus Routes"
        subtitle="Manage bus routes for bookings (departure/arrival destination)"
        breadcrumbs={["Manage Bus Routes"]}
      ></PageHeader>

      <div className="px-5">
        <Card className="w-full min-h-[100px] flex flex-col gap-7">
          <div className="flex flex-row justify-between">
            <div className="w-full">
              <h1 className="font-bold">Routes List</h1>
            </div>
            <div className="w-full flex flex-row justify-end gap-2">
              <Link to="/dashboard/bus-routes/form?type=add">
                <Button type="primary" className="text-xs">
                  Add Route
                </Button>
              </Link>
              <Button className="text-xs">Export to CSV</Button>
              <Button className="text-xs" onClick={() => refetch()}>
                Refresh List
              </Button>
            </div>
          </div>

          {isLoading ? "Fetching data" : <TableBuilder data={data} columns={columns} />}
        </Card>
      </div>
    </>
  );
};

export default BusRoutesManagePage;
