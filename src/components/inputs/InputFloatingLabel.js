import React from "react";

export default function InputFloatingLabel({ id, type, placeholder }) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="peer w-full h-10 border-2 px-2 border-gray-200 text-gray-800 placeholder-transparent focus:outline-none focus:border-accent rounded-lg"
      />
      <label
        for={id}
        className="absolute bg-white rounded-md px-1 left-3 -top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:left-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-600 peer-focus:bg-white"
      >
        {placeholder}
      </label>
    </div>
  );
}
