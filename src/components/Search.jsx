import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const {foodSearch} = props
  
  const [query, setQuery] = useState('');


  const searchFood = (e) => {
    setQuery(e.target.value)
    foodSearch(e.target.value)
} 



  return (
    <>
      <Divider>Search</Divider>

      <label >Search</label>
      <Input  placeholder="Search by name" value={query} type="text"  onChange={searchFood}/>
    </>
  );
}

export default Search;
