import BookList from "@/components/BookList";

// If you manage login via cookies/session, you can fetch isAuthenticated from context or server
export default function books() {
  const isAuthenticated = true; // Replace with real logic

  return <BookList isAuthenticated={isAuthenticated} />;
}
