import React from "react";

const CreatedBy = () => {
  return (
    <div
      className="flex justify-center items-center text-center  text-purple-900 text-xs  w-full h-6
        bg-indigo-900 "
    >
      Created by{" "}
      <a
        className="cursor-pointer rounded-lg "
        title="Go"
        href="https://www.halilgoksu.com"
      >
        ©Goksu
      </a>
    </div>
  );
};

export default CreatedBy;
