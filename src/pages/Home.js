import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <Link
        to="/login"
        className="px-2 py-1 text-sm rounded-lg border-gray-600 border-2 text-gray-700 font-medium hover:bg-gray-600 hover:text-white"
      >
        Go to login
      </Link>
    </div>
  );
}
