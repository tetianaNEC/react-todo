/* eslint-disable react/prop-types */
const TodoListItem = (props) => {
    return (
      <li>
        <span>
          <a href={props.todo.url}>{props.todo.title}</a>
        </span>
        <span>{props.todo.time}</span>
      </li>
    );
  };
  
  export default TodoListItem;
