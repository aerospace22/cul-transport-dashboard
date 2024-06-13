import httpClient from "@/api";
import { toast } from "react-toastify";

export type BusVehicle = {
  id?: number;
  fullname: string;
  contactNo?: string;
};

export const BusVehiclesService = {
  getBusVehiclesList: async function () {
    return await httpClient
      .get("/bus")
      .then((response) => response.data)
      .catch((error) => console.log("API call failed: ", error));
  },

  addBusVehicle: async function (vehicleData: BusVehicle) {
    return await httpClient
      .post("/bus", vehicleData)
      .then((response) => {
        toast.success("Bus vehicle added succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },

  updateBusVehicle: async function (id: number, vehicleData: BusVehicle) {
    return await httpClient
      .patch("/bus/" + id, vehicleData)
      .then((response) => {
        toast.success("Bus vehicle updated succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },

  deleteBusVehicle: async function (id: number) {
    return await httpClient
      .delete("/bus/" + id)
      .then((response) => {
        toast.success("Bus vehicle deleted succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },
};
