import React, { useState } from "react";
import { BiInfoCircle, BiLoaderAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-screen h-screen bg-white grid place-items-center">
      <div className="border-gray-200 p-8 xs:border-2 rounded-2xl">
        <form className="w-[240px] relative" onSubmit={handleSubmit}>
          <h1 className="text-xl xs:text-2xl font-semibold mb-4">
            Reset password
          </h1>
          <input
            type="email"
            placeholder="Email address"
            className="focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && (
            <div className="w-full p-0.5 text-red-400 rounded-lg flex text-sm font-medium gap-1 bg-red-100 border-2 border-red-300 mt-2">
              <BiInfoCircle className="rotate-180 text-xl flex-none" />
              <p className="flex-auto truncate">{error}</p>
            </div>
          )}
          <Link
            className="mt-1 block h-4 w-full text-right text-sm text-gray-500 hover:underline"
            to="/login"
          >
            Back to login
          </Link>
          <button
            type="submit"
            className="mt-4 px-2 py-1 text-sm rounded-lg border-gray-600 border-2 text-gray-700 font-medium hover:bg-gray-600 hover:text-white"
          >
            Reset password →
          </button>
          {loading && (
            <div className="absolute inset-0 bg-white grid place-items-center">
              <span className="animate-spin text-2xl text-gray-500">
                <BiLoaderAlt />
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
