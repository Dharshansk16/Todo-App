import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="HomePageFont">
      <Navbar />
      <TodoList />
    </main>
  );
}
