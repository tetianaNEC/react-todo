import { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {


  const [todoTitle, setTodoTitle] = useState('');

  // Function to handle input changes
  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  // Function to handle form submission
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!todoTitle) return; // Prevent adding empty todos

    // Create a new todo object with a unique ID
    const newTodo = {
      id: Date.now(), // Simple unique ID
      title: todoTitle,
      url: '', 
      time: '' 
    };

    // Call the callback handler with the new todo object
    onAddTodo(newTodo);
    setTodoTitle(''); // Clear the input field
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        name="title"
        placeholder="Add new..."
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
