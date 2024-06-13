import httpClient from "@/api";
import { toast } from "react-toastify";

export type Credentials = {
  email: string;
  password: string;
};

export const AuthService = {
  login: async function (credentials: Credentials, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    return await httpClient
      .post("/auth/admin/login", credentials)
      .then((response) => {
        const { user, accessToken } = response.data;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", accessToken);

        setTimeout(() => {
          window.location.href = "/dashboard/overview";
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid credentials provided");
        setLoading(false);
      });
  },
};
