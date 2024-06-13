import React from "react";
import { Modal, Form, Input, Select } from "antd";
import { BusVehiclesService, BusConductorsService, BusDriversService } from "@/services";
import type { Driver } from "@/services/bus-drivers.service";
import type { Conductor } from "@/services/bus-conductors.service";

type Props = {
  isOpen: boolean;
  title: string;
  formType?: "add" | "update";
  formData?: any;
  refetch: () => void;
  handleClose: () => void;
};

const types = [
  {
    value: "ordinary",
    label: "Ordinary",
  },

  {
    value: "premium",
    label: "Premium",
  },
];

export const BusVehicleFormModal: React.FC<Props> = (props) => {
  const [form] = Form.useForm();
  const [personnelList, setPersonnelList] = React.useState({
    drivers: [],
    conductors: [],
  });

  const clearForm = () => {
    form.resetFields();
  };

  const handleFormSubmit = async (formData: Driver) => {
    if (props.formType === "update") {
      await BusVehiclesService.updateBusVehicle(+props.formData.id!, formData);
    } else {
      await BusVehiclesService.addBusVehicle(formData);
    }

    handleCloseModal();
    props.refetch();
  };

  const handleCloseModal = () => {
    clearForm();
    props.handleClose();
  };

  const fetchPersonnelData = async () => {
    const [driversData, conductorsData] = await Promise.all([BusConductorsService.getConductorsList(), BusDriversService.getDriversList()]);

    setPersonnelList({
      drivers: driversData.map((driver: Driver) => ({ value: driver.id, label: driver.fullname })),
      conductors: conductorsData.map((conductor: Conductor) => ({ value: conductor.id, label: conductor.fullname })),
    });
  };

  React.useEffect(() => {
    if (props.formData) {
      form.setFieldValue("busDriverId", props.formData.busDriverId);
      form.setFieldValue("busConductorId", props.formData.busConductorId);
      form.setFieldValue("busNo", props.formData.busNo);
      form.setFieldValue("plateNo", props.formData.plateNo);
      form.setFieldValue("type", props.formData.type);
    }
  }, [form, props.formData]);

  React.useEffect(() => {
    fetchPersonnelData();
  }, []);

  return (
    <Modal title={props.title} open={props.isOpen} onOk={() => form.submit()} onCancel={props.handleClose} okText="Submit Data">
      <Form layout="vertical" form={form} onFinish={handleFormSubmit} requiredMark>
        <Form.Item label="Assigned Driver" name="busDriverId" required>
          <Select options={personnelList.drivers} />
        </Form.Item>
        <Form.Item label="Assigned Conductor" name="busConductorId" required>
          <Select options={personnelList.conductors} />
        </Form.Item>
        <Form.Item label="Bus No" name="busNo" required>
          <Input required />
        </Form.Item>
        <Form.Item label="Plate No." name="plateNo" required>
          <Input />
        </Form.Item>
        <Form.Item label="Type" name="type" required>
          <Select options={types} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
