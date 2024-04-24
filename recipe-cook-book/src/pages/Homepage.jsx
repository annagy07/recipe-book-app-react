import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import RecipeList from "../components/RecipeList";

function Homepage() {
  // const [recipe, setRecipe] = useState(RecipeData);

  // const addRecipe = (newRecipe) => {
  //   // Create a new array
  //   const updatedRecipes = [...recipes, newRecipe];
  //   const updatedRecipesData = [...recipeData, newRecipe];
  //   console.log(updatedRecipes)

  //   setRecipe(updatedRecipes);
  //   setRecipeData(updatedRecipesData);
  // };

  return (
    <div>
      <div></div>
      <div>
        <RecipeList />
      </div>
    </div>
  );
}

export default Homepage;
