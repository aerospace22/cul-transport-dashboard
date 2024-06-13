import React from "react";

export const ResetPasswordForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 text-[14px]">
      <p className="text-gray-500">Please input the one-time-passcode that has been sent to your e-mail</p>
      <input type="text" placeholder="OTP Code" required />
      <button type="submit" className="h-[50px] w-full  text-white bg-red-800 hover:bg-red-700  rounded mt-2">
        VERIFY CODE
      </button>

      <button className="text-blue-700 text-left underline">Resend code</button>
    </form>
  );
};
