import { useState } from "react";
import { Divider, Input } from 'antd';

function AddFoodForm({addFood}) {
    
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


   const submitForm = (e) => {
        e.preventDefault();
       
       addFood({            
            name,
            image,
            calories,
            servings
        })  
   }
    
    const nameHandler = (e)=> {
        setName(e.target.value);
    }

    const imageHandler = (e)=> {
        setImage(e.target.value);
    }

    const caloriesHandler = (e)=> {
        setCalories(e.target.value);
    }
    const servingsHandler = (e)=> {
        setServings(e.target.value);
    }


  return (
      <form onSubmit={submitForm} style={{ width: "80vw", margin: "auto" }}>
      <Divider>Add Food Entry</Divider>

      <label>Name:</label>
      <Input value={name} type="text" onChange={nameHandler} />

        <label>Image:</label>
      <Input value={image} type="text" onChange={imageHandler} />
          

        <label>Calories:</label>
      <Input value={calories} type="number" onChange={caloriesHandler} />
          

        <label>Servings:</label>
      <Input value={servings} type="number" onChange={servingsHandler} />
          

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;