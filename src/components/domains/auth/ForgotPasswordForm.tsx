import React from "react";

export const ForgotPasswordForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 text-[14px]">
      <p className="text-gray-500">Please input your account e-mail and an instruction on how to reset your password will be sent to your inbox</p>
      <input type="text" placeholder="E-mail" required />

      <button type="submit" className="h-[50px] w-full  text-white bg-red-800 hover:bg-red-700  rounded mt-2">
        SEND CODE
      </button>
    </form>
  );
};
