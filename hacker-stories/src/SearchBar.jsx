const SearchBar = () => {
 
  const handleChange = (event)=>{

  }
 
  return(  
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
  
};


  
  export default SearchBar;