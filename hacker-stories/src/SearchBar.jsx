import { useState } from 'react';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (event)=>{
    //synthetic event
   setSearchTerm(event.target.value);
  }
  const handleMouseOver =(event) => {
    console.log(event)
  }
  
 
  return(  
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onMouseOver={handleMouseOver}/>
    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
    </div>
  );
  
};


  
  export default SearchBar;