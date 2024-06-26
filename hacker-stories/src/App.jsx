import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
const title = 'Todo List';


function App () {
  return (
    <div>
      <h1>{title}</h1>
      <AddTodoForm/>
      <Search/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;


//React components 

const Search = () => {
  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
  );
};




