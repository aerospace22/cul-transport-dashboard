import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Button, Modal } from "antd";
import { PageHeader, TableBuilder } from "@/components/shared";
import { BusVehicleFormModal } from "@/components/domains/dashboard";
import { BusVehiclesService } from "@/services";

const BusVehiclesManagePage: React.FC = () => {
  const [modal, setModal] = React.useState({
    isOpen: false,
    selectedData: undefined,
  });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["bus-drivers"],
    queryFn: async () => BusVehiclesService.getBusVehiclesList(),
  });

  const handleModal = (isOpen: boolean, selectedData?: undefined) => {
    setModal({ isOpen, selectedData });
  };

  const handleUpdate = (rowData: any) => {
    handleModal(true, rowData);
  };

  const handleDelete = (rowId: number) => {
    Modal.confirm({
      title: "Confirm",
      content: "Do you confirm to delete this record?",
      async onOk() {
        await BusVehiclesService.deleteBusVehicle(rowId).finally(() => refetch());
      },
      onCancel() {
        //
      },
    });
  };

  const columns = [
    {
      name: "Bus #",
      sortable: true,
      selector: (row: any) => row.busNo,
    },
    {
      name: "Assigned Driver",
      sortable: true,
      selector: (row: any) => row.busDriver?.fullname,
    },
    {
      name: "Assigned Conductor",
      sortable: true,
      selector: (row: any) => row.busConductor?.fullname,
    },
    {
      name: "Date Added",
      sortable: true,
      selector: (row: any) => row.createdAt,
    },
    {
      name: "Last Updated",
      sortable: true,
      selector: (row: any) => row.updatedAt,
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
        title="Bus Vehicles"
        subtitle="Manage bus vehicles and it's assigned driver/conductor"
        breadcrumbs={["Manage Bus Vehicles"]}
      ></PageHeader>

      <BusVehicleFormModal
        isOpen={modal.isOpen}
        title="Bus Vehicle Details"
        formData={modal.selectedData}
        refetch={refetch}
        handleClose={() => handleModal(false, undefined)}
      />

      <div className="px-5">
        <Card className="w-full min-h-[100px] flex flex-col gap-7">
          <div className="flex flex-row justify-between">
            <div className="w-full">
              <h1 className="font-bold">Bus Vehicles List</h1>
            </div>
            <div className="w-full flex flex-row justify-end gap-2">
              <Button type="primary" className="text-xs" onClick={() => handleModal(true, undefined)}>
                Add Bus Vehicle
              </Button>
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

export default BusVehiclesManagePage;
