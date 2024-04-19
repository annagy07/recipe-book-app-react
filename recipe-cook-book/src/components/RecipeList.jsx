import { useState } from "react";

import RecipeData from "../recipe-list.json";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipe] = useState(RecipeData);

  const deleteRecipe = (recipeId) => {
    const filteredRecipe = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipe(filteredRecipe);
  };
  return (
    <div className="recipeList">
      {recipes.map((recipe) => {
        if (recipe.isCompleted === true) {
          return (
            <div className="recipeCard" key={recipe.id}>
              
              <RecipeCard recipe={recipe} />
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default RecipeList;
