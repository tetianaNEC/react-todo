import TodoListItem from "./TodoListItem";
/* eslint-disable react/prop-types */

const TodoList = ({ title, todoList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;