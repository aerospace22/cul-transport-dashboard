import React from "react";
import moment from "moment";
import { Form, Input, Select, DatePicker, TimePicker, Divider, Button } from "antd";
import { BusVehiclesService, BusBusRoutesService } from "@/services";
import type { BusVehicle } from "@/services/bus-vehicles.service";

const statusOptions = ["draft", "published"].map((status) => ({ value: status, label: status.toUpperCase() }));
const inputRule = [{ required: true }];

export const BusRouteForm: React.FC = () => {
  const [form] = Form.useForm();
  const [busList, setBusList] = React.useState([]);

  const fetchBusList = async () => {
    await BusVehiclesService.getBusVehiclesList().then((data) =>
      setBusList(data.map((bus: BusVehicle) => ({ value: bus.id, label: `[${bus.busNo}] ${bus.plateNo} (${bus.type.toUpperCase()})` })))
    );
  };

  const handleFormSubmit = async (formData: any) => {
    await BusBusRoutesService.addBusRoute({
      ...formData,
      departureDate: moment(new Date(formData.departureDate)).format("YYYY-MM-DD"),
      departureTime: moment(new Date(formData.departureTime)).format("hh:mm A"),
      arrivalDate: moment(new Date(formData.arrivalDate)).format("YYYY-MM-DD"),
      arrivalTime: moment(new Date(formData.arrivalTime)).format("hh:mm A"),
    });
  };

  React.useEffect(() => {
    fetchBusList();
  }, []);

  return (
    <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
      <h1 className="text-sm font-bold mb-4">Vehicle Details</h1>
      <Form.Item className="w-full" label="Bus" name="busId" rules={inputRule} required>
        <Select options={busList} />
      </Form.Item>

      <Divider />

      <h1 className="text-sm font-bold mb-4">Start point details</h1>
      <div className="w-full flex flex-row gap-5">
        <Form.Item className="w-full" label="Route To" name="routeFrom" rules={inputRule} required>
          <Input />
        </Form.Item>
        <Form.Item className="w-full" label="Route From (Map Pin)" name="routeFromPin">
          <Input />
        </Form.Item>
      </div>
      <div className="w-full flex flex-row gap-5">
        <Form.Item className="w-full" label="Departure Date" name="departureDate" rules={inputRule} required>
          <DatePicker className="w-full py-2" />
        </Form.Item>
        <Form.Item className="w-full" label="Departure Time" name="departureTime" rules={inputRule} required>
          <TimePicker className="w-full py-2" use12Hours />
        </Form.Item>
      </div>

      <Divider />

      <h1 className="text-sm font-bold mb-4">Destination point details</h1>
      <div className="w-full flex flex-row gap-5">
        <Form.Item className="w-full" label="Route To" name="routeTo" rules={inputRule} required>
          <Input />
        </Form.Item>
        <Form.Item className="w-full" label="Route To (Map Pin)" name="routeToPin">
          <Input />
        </Form.Item>
      </div>
      <div className="w-full flex flex-row gap-5">
        <Form.Item className="w-full" label="Arrival Date" name="arrivalDate" rules={inputRule} required>
          <DatePicker className="w-full py-2" />
        </Form.Item>
        <Form.Item className="w-full" label="Arrival Time" name="arrivalTime" rules={inputRule} required>
          <TimePicker className="w-full py-2" use12Hours />
        </Form.Item>
      </div>

      <Divider />
      <Form.Item className="w-full" label="Status" name="status" rules={inputRule} required>
        <Select options={statusOptions} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit Data
      </Button>
    </Form>
  );
};
