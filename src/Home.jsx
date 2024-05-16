import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { Favorite } from '@mui/icons-material';
function Home() {
  
  const APP_ID = "edbac776";
  const APP_KEY = "acf8391415b7c83a2a283123ff916d04";

  const [Recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const InputEvent = (e) => {
    setSearch(e.target.value);
  }

  const GetSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const EnterKeySearch = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        GetSearch();
      }
    }
  }

  return (
    <div className="app-div">
      <h1 className="app-title">Naziya's Recipe Search App</h1>
      <form onSubmit={GetSearch} className="search-form text-center mt-5">
        <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={InputEvent}
        onKeyDown={EnterKeySearch}
        ></input>
        <button className="search-button" type="submit">Search</button>
      </form>
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
    </div>
  )
}

export default Home
