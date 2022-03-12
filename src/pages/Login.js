import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiInfoCircle, BiLoaderAlt, BiShow } from "react-icons/bi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // Google oauth function
  const googleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  // Default submit function
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
            onClick={googleSignIn}
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

function GoogleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.83 8.17996C15.83 7.65329 15.7834 7.15329 15.7034 6.66663H8.17004V9.67329H12.4834C12.29 10.66 11.7234 11.4933 10.8834 12.06V14.06H13.4567C14.9634 12.6666 15.83 10.6133 15.83 8.17996Z"
        fill="#4285F4"
      />
      <path
        d="M8.17003 15.9999C10.33 15.9999 12.1367 15.2799 13.4567 14.0599L10.8834 12.0599C10.1634 12.5399 9.25003 12.8333 8.17003 12.8333C6.08336 12.8333 4.3167 11.4266 3.68336 9.52661H1.03003V11.5866C2.34336 14.1999 5.04336 15.9999 8.17003 15.9999Z"
        fill="#34A853"
      />
      <path
        d="M3.68338 9.52666C3.51671 9.04666 3.43004 8.53333 3.43004 7.99999C3.43004 7.46666 3.52338 6.95333 3.68338 6.47333V4.41333H1.03004C0.483377 5.49333 0.170044 6.70666 0.170044 7.99999C0.170044 9.29333 0.483377 10.5067 1.03004 11.5867L3.68338 9.52666Z"
        fill="#FBBC05"
      />
      <path
        d="M8.17003 3.16667C9.35003 3.16667 10.4034 3.57334 11.2367 4.36667L13.5167 2.08667C12.1367 0.793334 10.33 0 8.17003 0C5.04336 0 2.34336 1.8 1.03003 4.41334L3.68336 6.47334C4.3167 4.57334 6.08336 3.16667 8.17003 3.16667Z"
        fill="#EA4335"
      />
    </svg>
  );
}
