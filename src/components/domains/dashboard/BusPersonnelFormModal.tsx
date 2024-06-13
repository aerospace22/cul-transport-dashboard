import React from "react";
import { Modal, Form, Input } from "antd";
import { BusDriversService, BusConductorsService } from "@/services";
import type { Driver } from "@/services/bus-drivers.service";

type Props = {
  isOpen: boolean;
  title: string;
  formType?: "add" | "update";
  formFor: "driver" | "conductor";
  refetch: () => void;
  handleClose: () => void;
};

export const BusPersonnelFormModal: React.FC<Props> = (props) => {
  const [form] = Form.useForm();

  const handleFormSubmit = async (formData: Driver) => {
    if (props.formFor === "driver") {
      await BusDriversService.addDriver(formData);
    } else {
      await BusConductorsService.addConductor(formData);
    }

    props.handleClose();
    props.refetch();
  };

  return (
    <Modal title={props.title} open={props.isOpen} onOk={() => form.submit()} onCancel={props.handleClose} okText="Submit Data">
      <Form layout="vertical" form={form} onFinish={handleFormSubmit} requiredMark>
        <Form.Item label="Full Name" name="fullname">
          <Input required />
        </Form.Item>
        <Form.Item label="Contact No." name="contactNo">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
