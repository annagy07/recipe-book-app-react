import { useState, useEffect } from "react";
import RecipeData from "../recipe-list.json";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";
import NewRecipeForm from "../components/NewRecipeForm";
import { NavLink } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) || RecipeData
  );

  useEffect(() => {
    // Update local storage whenever recipes state changes
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const deleteRecipe = (recipeId) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(filteredRecipes);
  };

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    console.log("Updated Recipes:", updatedRecipes);
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <NewRecipeForm addRecipe={addRecipe} />
      <div className="recipeList">
        {recipes
          .filter((recipe) => recipe.isCompleted)
          .map((recipe) => (
            <div className="recipeCard" key={recipe.id}>
              <NavLink to={`/recipe/${recipe.id}`} className="nav-link">
                <RecipeCard recipe={recipe} recipes={recipes} />
              </NavLink>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      {/* <button className="reset-btn" onClick={localStorage.clear()}>
        Reset Recipes
      </button> */}
    </div>
  );
}

export default RecipeList;
