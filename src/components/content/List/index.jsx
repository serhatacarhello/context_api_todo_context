import { useTodo } from "../../../contexts/TodoContext";
import Item from "./Item";

let filteredTodos = null;
const List = () => {
  const { todos, filter } = useTodo();
  filteredTodos = [...todos];
  if (filter !== "all") {
    filteredTodos = todos.filter((todo) =>
      filter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default List;
