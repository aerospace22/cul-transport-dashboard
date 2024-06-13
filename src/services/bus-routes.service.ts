import httpClient from "@/api";
import { toast } from "react-toastify";

export type BusRoute = {
  id?: number;
  fullname: string;
  contactNo?: string;
};

export const BusBusRoutesService = {
  getBusRoutesList: async function () {
    return await httpClient
      .get("/bus-routes")
      .then((response) => response.data)
      .catch((error) => console.log("API call failed: ", error));
  },

  addBusRoute: async function (busRouteData: BusRoute) {
    return await httpClient
      .post("/bus-routes", busRouteData)
      .then((response) => {
        toast.success("BusRoute added succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },

  updateBusRoute: async function (id: number, busRouteData: BusRoute) {
    return await httpClient
      .patch("/bus-routes/" + id, busRouteData)
      .then((response) => {
        toast.success("BusRoute updated succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },

  deleteBusRoute: async function (id: number) {
    return await httpClient
      .delete("/bus-routes/" + id)
      .then((response) => {
        toast.success("BusRoute deleted succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },
};
