import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import Search from './components/Search';

const foodsCopy = [...foods]

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
  
 const searchFoodHandler = (dish) =>{
    const foodMod = [...foodsCopy];
    console.log(foodMod)
    const filteredFood = foodMod.filter(element => {
      if (dish.length < 1) {
        return foodMod }
      else {
        return element.name.toLowerCase().includes(dish.toLowerCase())
      }
    }) 
    console.log(filteredFood)
    setFood(filteredFood) 
  }
  
  return (
    <div className="App">
      
  <AddFoodForm addFood={addFoodHandler}/>
      
      <Button> Hide Form / Add New Food </Button>
  <Search searchFood={searchFoodHandler}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map(food => <FoodBox  food= {food} deleteHandlerProps={deleteFood}/> )}
      </Row>
    </div>
  );
}

export default App;
