import TodoListItem from "./TodoListItem";
/* eslint-disable react/prop-types */
const TodoList =(props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;