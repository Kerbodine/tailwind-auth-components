import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiInfoCircle, BiLoaderAlt, BiShow } from "react-icons/bi";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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
          <h1 className="text-2xl xs:text-3xl font-semibold mb-4">Sign up</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First name"
              className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-600 text-gray-700"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-600 text-gray-700"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-600 text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-600 text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="-ml-7 text-xl text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </button>
          </div>
          {error && (
            <div className="w-full p-0.5 text-red-400 rounded-lg flex text-sm font-medium gap-1 bg-red-100 border-2 border-red-400 mt-2">
              <BiInfoCircle className="rotate-180 text-xl flex-none" />
              <p className="flex-auto truncate">{error}</p>
            </div>
          )}
          <button
            type="submit"
            className="mt-8 px-2 py-1 text-sm rounded-lg border-gray-600 border-2 text-gray-700 font-medium hover:bg-gray-600 hover:text-white"
          >
            Sign up →
          </button>
          <p className="mt-2 text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline font-medium text-gray-700"
            >
              Log in
            </Link>
          </p>
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
