
const todoList = [
    {
     id: 1,
     title: 'Read the book',
     url: 'https://openlibrary.org/',
     time: '1 hour',
    },
    {
      id:2,
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

  
const TodoList = () => {

    return(
            <ul>
            {todoList.map(function(item){
              return(
              <li key={item.id}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.time}</span>
              </li>
              );
             })}
            </ul>
    );

};
export default TodoList;