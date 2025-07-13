"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "@/lib/api"; // make sure this is your axios instance
import { useRouter } from "next/navigation";

export default function BookForm({ bookId }) {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  // fetch existing book if updating
  useEffect(() => {
    const fetchBook = async () => {
      if (bookId) {
        const res = await axios.get(`/books/${bookId}/`);
        reset(res.data); // populate form
      }
    };
    fetchBook();
  }, [bookId, reset]);

  const onSubmit = async (data) => {
    try {
      if (bookId) {
        await axios.put(`/books/${bookId}/`, data);
      } else {
        await axios.post("/books/", data);
      }
      router.push("/books"); // redirect after submit
    } catch (err) {
      console.error("Error submitting form:", err.response?.data || err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-5"
      >
        <h2 className="text-xl font-bold text-center text-gray-800">
          {bookId ? "Update Book" : "Create Book"}
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            {...register("author")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {bookId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
