import { useState } from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import SearchBar from "./SearchBar";

const title = 'Todo List';


const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const tasks = [
    {
      id: 1,
      title: 'Read the book',
      url: 'https://openlibrary.org/',
      time: '1 hour',
    },
    {
      id: 2,
      title: 'Complete assignment',
      url: 'https://classes.codethedream.org/',
      time: '2 hours',
    },
    {
      id: 3,
      title: 'Write an essay',
      url: 'https://classes.codethedream.org/',
      time: '2.5 hours'
    }
  ];


  return (
    <div>
      <h1>{title}</h1>
      <SearchBar />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <hr />
      <TodoList list={tasks} />
    </div>
  );

};
export default App;







//https://github.com/ElijahMSmith/Shopping-App-Hawk

