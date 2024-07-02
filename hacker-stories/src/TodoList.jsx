import TodoListItem from "./TodoListItem";
/* eslint-disable react/prop-types */
function TodoList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;