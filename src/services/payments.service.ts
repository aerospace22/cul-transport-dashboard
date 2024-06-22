import httpClient from "@/api";
import { toast } from "react-toastify";

export const PaymentsService = {
  getPaymongoPaymentsList: async () => {
    return [];
    // return await httpClient
    //   .get("/payments/paymongo-references")
    //   .then((response) => response.data)
    //   .catch((error) => {
    //     console.log(error);

    //     toast.error("Failed to get paymongo payments references list");
    //   });
  },
};
