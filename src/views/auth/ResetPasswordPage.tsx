import React from "react";
import { ResetPasswordForm } from "@/components/domains/auth";

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 py-8 px-5">
      <h1 className="text-md text-center font-bold">RESET YOUR PASSWORD</h1>

      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
