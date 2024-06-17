//import * as React from 'react';

const title = 'Todo List';

const todoList = [
  {
   id: 1,
   title: 'Read the book', 
  },
  {
    id:2,
    title: 'Complete assignment',
  },
  {
    id: 3,
    title: 'Wright essay',
  }
];
function App() {
  return (
    <div>
      <h1>{title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <ul>{todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })}</ul>
    </div>
  );
}

export default App;




