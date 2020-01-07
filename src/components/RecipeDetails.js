import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RecipeDetails = (props) => {
  const [current, setCurrent] = useState()

  useEffect(()=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://bw4-chef-api.herokuapp.com/api/recipes/${props.match.params.id}`)
    .then(res => {
      console.log('res', res)
      setCurrent(res.data)
    })
    .catch(err => { console.log('error')})
  },[])
  
  // const currentRecipe = props.recipes.find(curr => {
  //   return Number(curr.id) === Number(props.match.params.id);
  // })

  // console.log('currentRecipe', currentRecipe)

  if (current) {
  return (
    <div>
      <h1 className="">Hello From Recipe Details</h1>
      <h2>{current.title}</h2>
      <img src={current.image}  height="300" width="300"/>
      <h3>Ingredients:</h3>
      <ul>
        {current.ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {current.instructions.map(instruction => (
          <li>{instruction}</li>
        ))}
      </ol>      
    </div>
  )
} else {
  return (
  <p>...Loading</p>
  )
}
}

export default RecipeDetails
