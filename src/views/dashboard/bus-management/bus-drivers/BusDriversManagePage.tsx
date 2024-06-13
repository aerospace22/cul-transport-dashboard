import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Button, Modal } from "antd";
import { BusDriversService } from "@/services";
import { PageHeader, TableBuilder } from "@/components/shared";
import { BusPersonnelFormModal } from "@/components/domains/dashboard";

const BusDriversManagePage: React.FC = () => {
  const [modal, setModal] = React.useState({
    isOpen: false,
    selectedData: undefined,
  });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["bus-drivers"],
    queryFn: async () => BusDriversService.getDriversList(),
  });

  const handleModal = (isOpen: boolean, selectedData?: undefined) => {
    setModal({ isOpen, selectedData });
  };

  const handleUpdate = (rowData: any) => {
    console.log(rowData);
  };

  const handleDelete = (rowId: number) => {
    Modal.confirm({
      title: "Confirm",
      content: "Do you confirm to delete this record?",
      async onOk() {
        await BusDriversService.deleteDriver(rowId).finally(() => refetch());
      },
      onCancel() {
        //
      },
    });
  };

  const columns = [
    {
      name: "Full Name",
      sortable: true,
      selector: (row: any) => row.fullname,
    },
    {
      name: "Contact #",
      sortable: true,
      selector: (row: any) => row.contactNo,
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
      <PageHeader title="Bus Drivers" subtitle="Manage staff bus drivers information" breadcrumbs={["Manage Bus Drivers"]}></PageHeader>

      <BusPersonnelFormModal
        isOpen={modal.isOpen}
        formFor="driver"
        title="Bus Driver Details"
        refetch={refetch}
        handleClose={() => handleModal(false, undefined)}
      />

      <div className="px-5">
        <Card className="w-full min-h-[100px] flex flex-col gap-7">
          <div className="flex flex-row justify-between">
            <div className="w-full">
              <h1 className="font-bold">Drivers List</h1>
            </div>
            <div className="w-full flex flex-row justify-end gap-2">
              <Button type="primary" className="text-xs" onClick={() => handleModal(true, undefined)}>
                Add Driver
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

export default BusDriversManagePage;
