import React from "react";
import { LoginForm } from "@/components/domains/auth";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 py-8 px-5">
      <h1 className="text-md text-center font-bold">LOG IN</h1>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
