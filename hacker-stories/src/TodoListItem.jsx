/* eslint-disable react/prop-types */


const TodoListItem = ({ todo }) => {
  return (
    <li>
      <span>
        <a href={todo.url}>{todo.title}</a>
      </span>
      <span>{todo.time}</span>
    </li>
  );
};

export default TodoListItem;

//props treated as immutable data structure, and can not be changed
//used to pass information down the component hierarchy - from parent to child and not vice versa
//While props are used to pass information down the component hierarchy, state is used to change information over time.