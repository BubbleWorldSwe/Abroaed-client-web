import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center mt-10 h-[450px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
    </div>
  );
}
