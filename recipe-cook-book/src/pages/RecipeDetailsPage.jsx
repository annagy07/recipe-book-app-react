import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RecipeData from "../recipe-list.json";

function RecipeDetailsPage(props) {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    // Try to load recipes from local storage
    const loadedRecipes = JSON.parse(localStorage.getItem("recipes"));
    // Fall back to the static data if there's nothing in local storage
    const allRecipes = loadedRecipes || RecipeData;
    // Find the current recipe by id
    const currentRecipe = allRecipes.find(
      (recipe) => recipe.id.toString() === recipeId
    );
    setRecipeDetails(currentRecipe);
    console.log(currentRecipe);
  }, [recipeId]);

  console.log(recipeDetails);

  return (
    <div className="details-container">
      {recipeDetails && (
        <>
          <img className="details-header-image" src={recipeDetails.image} />
          <h3>{recipeDetails.name}</h3>
          <div className="recipe-info">
            <p className="recipe-info-individual">
              Servings: {recipeDetails.servings}
            </p>
            <p className="recipe-info-individual">
              Calories: {recipeDetails.calories}
            </p>
          </div>
          <div className="ingredients">
            <h4>INGREDIENTS</h4>
            <ul>
              {recipeDetails.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="directions">
            <h4>DIRECTIONS</h4>
            <ol>
              {recipeDetails.directions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="detail-page-btn-container">
            <NavLink to={`/`}>
              <button className="detail-page-btn">Back to overview</button>
            </NavLink>
            <NavLink to={`/edit/${recipeDetails.id}`}>
              <button className="detail-page-btn">Edit Recipe</button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetailsPage;
