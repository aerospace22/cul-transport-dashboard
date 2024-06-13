import httpClient from "@/api";
import { toast } from "react-toastify";

export type Driver = {
  id?: number;
  fullname: string;
  contactNo?: string;
};

export const BusDriversService = {
  getDriversList: async function () {
    return await httpClient
      .get("/bus-drivers")
      .then((response) => response.data)
      .catch((error) => console.log("API call failed: ", error));
  },

  addDriver: async function (driverData: Driver) {
    return await httpClient
      .post("/bus-drivers", driverData)
      .then((response) => {
        toast.success("Driver added succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },
};
