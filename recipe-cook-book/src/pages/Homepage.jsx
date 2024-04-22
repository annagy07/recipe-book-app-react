import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RecipeData from "../recipe-list.json";
import RecipeList from "../components/RecipeList";
import NewRecipeForm from "../components/NewRecipeForm";

function Homepage() {
  const [recipe, setRecipe] = useState(RecipeData);
  const [recipeData, setRecipeData] = useState(RecipeData);

  const addRecipe = (newRecipe) => {
    // Create a new array
    const updatedRecipes = [...recipe, newRecipe];
    const updatedRecipesData = [...recipeData, newRecipe];

    setRecipe(updatedRecipes);
    setRecipeData(updatedRecipesData);
  };

  return (
    <div>
      <div>
        <NewRecipeForm addRecipe={addRecipe} />
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  );
}

export default Homepage;
