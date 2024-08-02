import { useState } from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import SearchBar from "./SearchBar";

const title = 'Todo List';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    setTodoList(prevList => [...prevList, newTodo]);
  };

  return (
    <div>
      <h1>{title}</h1>
      <SearchBar />
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      <TodoList todoList={todoList} title="My Plan: " />
    </div>
  );
};

export default App;







//https://github.com/ElijahMSmith/Shopping-App-Hawk

