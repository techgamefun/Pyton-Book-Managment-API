"use client";

import { useForm } from "react-hook-form";
import apiCall from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const res = await apiCall.post("/token/", data);
      if (res.status === 200) {
        router.push("/dashboard");
      }
    } catch (err) {
      const errData = err.response?.data;
      console.log(errData);

      const flattened = [];

      for (const key in errData) {
        if (Array.isArray(errData[key])) {
          flattened.push(...errData[key]);
        } else {
          flattened.push(errData[key]);
        }
      }

      setError(flattened);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="username"
            id="username"
            {...register("username")}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Submit
          </button>
        </div>
        {error.length > 0 && (
          <div className="mt-2 space-y-1">
            {error.map((msg, idx) => (
              <p key={idx} className="text-red-600 text-sm">
                {msg}
              </p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
