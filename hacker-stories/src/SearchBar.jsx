const SearchBar = () => {
 
  const handleChange = (event)=>{
    //synthetic event
   console.log(event);
  }
  const handleMouseOver =(event) => {
    console.log(event)
  }
 
  return(  
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onMouseOver={handleMouseOver}/>
    </div>
  );
  
};


  
  export default SearchBar;