import httpClient from "@/api";
import { toast } from "react-toastify";

export type Conductor = {
  id?: number;
  fullname: string;
  contactNo?: string;
};

export const BusConductorsService = {
  getConductorsList: async function () {
    return await httpClient
      .get("/bus-conductors")
      .then((response) => response.data)
      .catch((error) => console.log("API call failed: ", error));
  },

  addConductor: async function (conductorData: Conductor) {
    return await httpClient
      .post("/bus-conductors", conductorData)
      .then((response) => {
        toast.success("Conductor added succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },

  updateConductor: async function (id: number, conductorData: Conductor) {
    return await httpClient
      .patch("/bus-conductors/" + id, conductorData)
      .then((response) => {
        toast.success("Conductor updated succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },

  deleteConductor: async function (id: number) {
    return await httpClient
      .delete("/bus-conductors/" + id)
      .then((response) => {
        toast.success("Conductor deleted succesfully");

        return response;
      })
      .catch((error) => console.log("API call failed: ", error));
  },
};
