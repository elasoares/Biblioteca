import "./App.css";
import { BookList } from "./components/BookList/BookList";
import { Menu } from "./components/Menu/Menu";

export default function App() {
  return (
    <div>
      <Menu />
      <BookList />
    </div>
  );
}
