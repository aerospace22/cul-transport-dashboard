import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthService } from "@/services";
import { Credentials } from "@/services/auth.service";

export const LoginForm: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "admin@cultransport.com",
      password: "password",
    },
  });

  const handleLogin = handleSubmit(async (formData: any) => {
    setLoading(true);

    return await AuthService.login(formData as Credentials, setLoading);
  });

  return (
    <form className="flex flex-col gap-4 text-[14px]" onSubmit={handleLogin}>
      <input type="text" placeholder="E-mail" {...register("email")} required />
      <input type="password" placeholder="Password" {...register("password")} required />
      <Link to="/auth/forgot-password" className="text-sm text-right text-blue-700 underline">
        Reset Password
      </Link>
      <button type="submit" className="h-[50px] w-full  text-white bg-red-800 hover:bg-red-700 disabled:bg-red-200  rounded mt-2" disabled={loading}>
        {loading ? "..." : "LOG IN"}
      </button>
    </form>
  );
};
