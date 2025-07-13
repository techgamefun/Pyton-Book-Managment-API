// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Sidebar */}
      <aside className="w-64 h-screen fixed top-0 left-0 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="/dashboard/books/add" className="hover:underline">
              Add a Book
            </a>
          </li>
          <li>
            <a href="/dashboard/books" className="hover:underline">
              All Books
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content (pushed to the right) */}
      <main className="ml-64 flex-1 bg-gray-100 p-6 overflow-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
