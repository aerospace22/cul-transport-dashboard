import React from "react";
import { Modal, Form, Input } from "antd";
import { BusDriversService, BusConductorsService } from "@/services";
import type { Driver } from "@/services/bus-drivers.service";

type Props = {
  isOpen: boolean;
  title: string;
  formType?: "add" | "update";
  formFor: "driver" | "conductor";
  formData?: any;
  refetch: () => void;
  handleClose: () => void;
};

export const BusPersonnelFormModal: React.FC<Props> = (props) => {
  const [form] = Form.useForm();

  const clearForm = () => {
    form.resetFields();
  };

  const handleFormSubmit = async (formData: Driver) => {
    if (props.formFor === "driver") {
      if (props.formType === "update") {
        return await BusDriversService.updateDriver(+props.formData.id!, formData);
      }

      await BusDriversService.addDriver(formData);
    } else {
      if (props.formType === "update") {
        return await BusConductorsService.updateConductor(+props.formData.id!, formData);
      }

      await BusConductorsService.addConductor(formData);
    }

    handleCloseModal();
    props.refetch();
  };

  const handleCloseModal = () => {
    clearForm();
    props.handleClose();
  };

  React.useEffect(() => {
    if (props.formData) {
      form.setFieldValue("fullname", props.formData.fullname);
      form.setFieldValue("contactNo", props.formData.contactNo);
    }
  }, [form, props.formData]);

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
