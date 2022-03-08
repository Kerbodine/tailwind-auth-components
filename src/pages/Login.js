import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiInfoCircle, BiLoaderAlt, BiShow } from "react-icons/bi";
import { ReactComponent as GoogleIcon } from "./google.svg";

export default function Login() {
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
          <h1 className="text-2xl xs:text-3xl font-semibold mb-4">Log in</h1>
          <button
            type="button"
            onClick={null}
            className="h-9 px-2 font-medium text-sm gap-2 flex items-center rounded-lg hover:border-gray-400 text-gray-600 w-full border-2 border-gray-200"
          >
            <span className="text-base">
              <GoogleIcon />
            </span>
            Continue with Google
          </button>
          <div className="my-2 w-full flex items-center">
            <div className="flex-auto h-0.5 bg-gray-200"></div>
            <p className="mx-2 text-xs font-bold text-gray-500">OR</p>
            <div className="flex-auto h-0.5 bg-gray-200"></div>
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="mb-2 focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-400 text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="focus:outline-none border-2 px-2 py-1 w-full rounded-lg border-gray-200 focus:border-gray-400 text-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="-ml-7 text-xl text-gray-400 hover:text-gray-600"
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
          <div className="mt-1 flex hover:underline text-sm text-gray-500">
            <Link to="/reset-password" className="ml-auto">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="mt-4 px-2 py-1 text-sm rounded-lg border-gray-600 border-2 text-gray-600 font-medium hover:bg-gray-600 hover:text-white"
          >
            Log in →
          </button>
          <p className="mt-2 text-sm text-gray-500">
            Need an account?{" "}
            <Link
              to="/signup"
              className="hover:underline font-medium text-gray-700"
            >
              Sign up
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
