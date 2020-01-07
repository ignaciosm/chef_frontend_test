import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RecipeDetails = (props) => {
  const [ingredients, setIngredients] = useState([])

  useEffect(()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://bw4-chef-test.herokuapp.com/recipe_ingredients')
    .then(res => {
      setIngredients(res.data)
    })
    .catch(err => { console.log('error')})
  },[])
  
  const currentRecipe = props.recipes.find(curr => {
    return Number(curr.id) === Number(props.match.params.id);
  })

  console.log('currentRecipe', currentRecipe)

  if (currentRecipe) {
  return (
    <div>
      <h1 className="">Hello From Recipe Details</h1>
      <h2>{currentRecipe.title}</h2>
      <img src={currentRecipe.image}  height="300" width="300"/>
      <h3>Ingredients:</h3>
      <ol>
        {currentRecipe.ingredients.map(ingredient => (
          <li>{ingredient.name}</li>
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
