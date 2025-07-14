import BookList from "@/components/BookList.jsx";

// If you manage login via cookies/session, you can fetch isAuthenticated from context or server
export default function Home() {
  const isAuthenticated = false; // Replace with real logic

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="right-5 bottom-5 mb-4 fixed">
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow transition duration-200"
        >
          Log in
        </a>
      </div>

      <BookList isAuthenticated={isAuthenticated} />
    </div>
  );
}
