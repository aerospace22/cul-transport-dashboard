import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Button, Modal } from "antd";
import { PageHeader, TableBuilder } from "@/components/shared";
import { BusConductorsService } from "@/services";

const BusVehiclesManagePage: React.FC = () => {
  const [modal, setModal] = React.useState({
    isOpen: false,
    selectedData: undefined,
  });

  console.log(modal);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["bus-drivers"],
    queryFn: async () => BusConductorsService.getConductorsList(),
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
        await BusConductorsService.deleteConductor(rowId).finally(() => refetch());
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
      selector: (row: any) => row.fullname,
    },
    {
      name: "Assigned Driver",
      sortable: true,
      selector: (row: any) => row.contactNo,
    },
    {
      name: "Assigned Conductor",
      sortable: true,
      selector: (row: any) => row.contactNo,
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

      <div className="px-5">
        <Card className="w-full min-h-[100px] flex flex-col gap-7">
          <div className="flex flex-row justify-between">
            <div className="w-full">
              <h1 className="font-bold">Conductors List</h1>
            </div>
            <div className="w-full flex flex-row justify-end gap-2">
              <Button type="primary" className="text-xs" onClick={() => handleModal(true, undefined)}>
                Add Bus Vehicle
              </Button>
              <Button color="success" className="text-xs">
                Export to CSV
              </Button>
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
