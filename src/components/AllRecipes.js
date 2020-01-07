import React from 'react'

const AllRecipes = (props) => {

  console.log('props.recipes', props.recipes)
  return (
    <div>
      <h1 className="">Hello From All Recipes</h1>
      {props.recipes.map(recipe => (
        <div>
          <img src={recipe.image}  height="200" width="200"/>
          <p>{recipe.title}</p>
        </div>
      ))}
    </div>
  )
}

export default AllRecipes
