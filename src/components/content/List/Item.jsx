import { useTodo } from "../../../contexts/TodoContext";

const Item = ({ todo }) => {
  const { toggleTodo, destroyTodo } = useTodo();

  const handleChange = (id) => toggleTodo(id);
  const onDestroy = (id) => destroyTodo(id);

  return (
    <>
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id)}
          />
          <label>{todo.text}</label>
          <button
            className="destroy"
            onClick={() => onDestroy(todo.id)}
          ></button>
        </div>
      </li>
    </>
  );
};

export default Item;
