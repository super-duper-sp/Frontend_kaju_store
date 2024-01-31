import React from "react";
import { useSelector } from "react-redux";
const Userprofile = ({ userName, userDesignation, userPic, isHovered }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div id="profile" class="space-y-3">
      <img
        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="Avatar user"
        class="w-10 md:w-16 px-2 py-2 rounded-full mx-auto"
      />

      {isHovered && (
        <div className="px-2 py-2">
          <h2 class="font-medium text-xs md:text-sm text-center text-bold text-teal-500">
            Shubham Patidar
          </h2>
          <p class="text-xs pt-1 text-gray text-center">
            Role: Super Admin
          </p>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
