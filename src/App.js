import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import Search from './components/Search';


function App() {
  const [food, setFood] = useState(foods);

   const addFoodHandler = (singleFood) => {
        const foodMod = [...food, singleFood];
     setFood(foodMod);
     console.log("foodMood: ", foodMod)
   }
  
  
    const deleteFood = (foodName)=>{
        const foodArray = food.filter(food => {
            return food.name !== foodName;
        })
        setFood(foodArray);
    }
  
  const filterFood = () => {
    
 }
  
  return (
    <div className="App">
      
  <AddFoodForm addFood={addFoodHandler}/>
      
      <Button> Hide Form / Add New Food </Button>
      <Search foodSearch={ filterFood} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map(food => <FoodBox  food= {food} deleteHandlerProps={deleteFood}/> )}
      </Row>
    </div>
  );
}

export default App;
