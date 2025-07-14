"use client";

import { useEffect, useState } from "react";
import apiCall from "@/lib/api"; // Your configured Axios instance
import BookForm from "./Bookform";

export default function BookList({ isAuthenticated }) {
  const [books, setBooks] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await apiCall.get("/books/");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchBooks();
  }, []);

  // Delete book
  const handleDelete = async (id) => {
    try {
      await apiCall.delete(`/books/${id}/`);
      fetchBooks(); // Refresh list
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Book Store
      </h1>

      {editingBookId ? (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
          <BookForm
            bookId={editingBookId}
            onSuccess={() => {
              setEditingBookId(null);
              fetchBooks();
            }}
          />
          <button
            className="mt-4 text-blue-600 underline text-sm"
            onClick={() => setEditingBookId(null)}
          >
            Cancel Edit
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {book.title}
              </h2>
              <p className="text-gray-700">
                <span className="font-medium">Author:</span> {book.author}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Price:</span> ₹{book.price}
              </p>

              {isAuthenticated && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingBookId(book.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
