import React, { useEffect, useState } from 'react';

import "./App.css"
import Recipe from './Recipe';
const Favorites = (props) => {
     const APP_ID = "edbac776";
  const APP_KEY = "acf8391415b7c83a2a283123ff916d04";

  const [Recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("mutton");
  
      useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }
    return(
      <>

        <h1 className="app-title">Naziya's Favorite</h1>
        <div className="recipes">
         {
            Recipes.map((val, ind) => (
            <>
            <Recipe
              key = {ind}
              title = {val.recipe.label}
              ingredients = {val.recipe.ingredients}
              calories = {val.recipe.calories}
              imagesrc = {val.recipe.image}
            />
            
                </>
          ))
          }
          </div>
           
        </>
  )
  
}

export default Favorites;