"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "@/lib/api"; // assumes this is your axios instance
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.put("/books/"); // any protected API
      } catch (err) {
        if (err.response?.status === 401) {
          router.push("/login");
        }
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/logout/", {}, { withCredentials: true });
      router.push("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Mobile sidebar toggle button */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between px-4 py-3 z-50 shadow">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:flex-shrink-0`}
      >
        <div className="p-6 pt-16 md:pt-6 h-full relative">
          <h2 className="text-2xl font-bold mb-6">📚 Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="/dashboard/books"
                className="block hover:bg-gray-700 px-4 py-2 rounded"
              >
                All Books
              </a>
            </li>
            <li>
              <a
                href="/dashboard/books/add"
                className="block hover:bg-gray-700 px-4 py-2 rounded"
              >
                Add Book
              </a>
            </li>
          </ul>

          {/* 🔴 Logout button at the bottom */}
          <button
            onClick={handleLogout}
            className="absolute bottom-6 left-6 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-[calc(100%-3rem)]"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto pt-16">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
