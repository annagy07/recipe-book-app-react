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
        {recipes.map((recipe) => (
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
      <button>
        Reset Recipes
      </button>
    </div>
  );
}

export default RecipeList;

// function RecipeList() {
//   const [recipes, setRecipe] = useState(RecipeData);
//   // const [recipeData, setRecipeData] = useState(RecipeData);

//   const deleteRecipe = (recipeId) => {
//     const filteredRecipe = recipes.filter((recipe) => {
//       return recipe.id !== recipeId;
//     });
//     setRecipe(filteredRecipe);
//   };

//   const addRecipe = (newRecipe) => {
//     // Create a new array
//     const updatedRecipes = [...recipes, newRecipe];
//     // const updatedRecipesData = [...recipeData, newRecipe];
//     console.log(updatedRecipes);

//     setRecipe(updatedRecipes);
//     // setRecipeData(updatedRecipesData);
//   };

//   return (
//     <div>
//       <div>
//         <NewRecipeForm addRecipe={addRecipe} />
//       </div>
//       <div className="recipeList">
//         {recipes.map((recipe) => {
//           if (recipe.isCompleted === true) {
//             return (
//               <div className="recipeCard" key={recipe.id}>
//                 <RecipeCard recipe={recipe} />
//                 <button
//                   onClick={() => deleteRecipe(recipe.id)}
//                   className="btn-delete"
//                 >
//                   Delete
//                 </button>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default RecipeList;
