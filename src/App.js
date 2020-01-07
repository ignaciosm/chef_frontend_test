import React, {useState, useEffect} from 'react';
import './App.css';
import { Route } from "react-router-dom";
import AllRecipes from './components/AllRecipes';
import RecipeDetails from './components/RecipeDetails';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://bw4-chef-api.herokuapp.com/api/recipes')
    .then(res => {
      setRecipes(res.data)
    })
    .catch(err => { console.log('error')})
  },[])

  console.log('recipes', recipes)

  return (
    <>
    <Route exact path="/" render={props => <AllRecipes {...props} recipes={recipes} />} />
    <Route exact path="/recipes/:id" render={props => <RecipeDetails {...props} recipes={recipes} />} />
    </>
  );
}

export default App;
