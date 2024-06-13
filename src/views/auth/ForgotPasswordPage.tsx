import React from "react";
import { ForgotPasswordForm } from "@/components/domains/auth";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 py-8 px-5">
      <h1 className="text-md text-center font-bold">FORGOT YOUR PASSWORD?</h1>

      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
