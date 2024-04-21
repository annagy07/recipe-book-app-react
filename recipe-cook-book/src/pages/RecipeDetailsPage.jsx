import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RecipeData from "../recipe-list.json";

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const [recipeDetails, setrecipeDetails] = useState(null);

  useEffect(() => {
    const recipe = RecipeData.find((recipe) => recipe.id === recipeId);
    setrecipeDetails(recipe);
  }, [recipeId]);

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
          <div>
            <h4>INGREDIENTS</h4>
            <ul>
              {recipeDetails.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div>
            <h4>INSTRUCTIONS</h4>
            <ol>
              {recipeDetails.directions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetailsPage;
