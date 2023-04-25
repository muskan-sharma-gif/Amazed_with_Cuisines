import React from 'react'
import Recipe from './Recipe'
import { useState,useEffect } from 'react';

const Cuisine = (props) => {
    const APP_ID = "cd9e53ac";
const APP_KEY = "592235da3e41db683cc3bfbed6d9b379";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("paneer");
const [abc,setAbc] =useState(false);

useEffect(() => {
	getRecipes()
	
  // eslint-disable-next-line 
}, [query])

const getRecipes = async () => {
	
	
	const response = await fetch
		(`https://api.edamam.com/search?q=${abc?query:props.typo}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	setAbc(false)
	// console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setAbc(true);
	setQuery(search);
	setSearch("");
}
	
	

  return (

    <div className="App">
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>

	<div className="recipes">
		{recipes.map((recipe,index )=> (
		<Recipe
			key={index}
			title={recipe.recipe.label}
			calories={recipe.recipe.calories}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredients}
		/>

		))}
	</div>

	</div>
  )
}

export default Cuisine
