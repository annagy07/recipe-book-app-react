import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RecipeData from "../recipe-list.json";

function EditRecipe(props) {
//   const { recipes } = props;
  const { recipeId } = useParams();

  const navigate = useNavigate();

  // separate state hooks für jedes Attribut
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    const loadedRecipes = JSON.parse(localStorage.getItem("recipes"));
    const allRecipes = loadedRecipes || RecipeData;
    const currentRecipe = allRecipes.find(
      (recipe) => recipe.id.toString() === recipeId
    );
    if (currentRecipe) {
      setName(currentRecipe.name);
      setImage(currentRecipe.image);
      setCalories(currentRecipe.calories);
      setServings(currentRecipe.servings);
      setIsCompleted(currentRecipe.isCompleted);
      setIngredients(currentRecipe.ingredients);
      setDirections(currentRecipe.directions);
    }
  }, [recipeId]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: recipeId, 
      name,
      image,
      calories,
      servings,
      isCompleted,
      ingredients,
      directions,
    };

    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = existingRecipes.map((recipe) =>
      recipe.id === recipeId ? updatedRecipe : recipe
    );

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/");
  };

  return (
    <div className="edit-recipe">
      <h4>Edit a Recipe</h4>
      <form onSubmit={handleSave}>
        <div className="form-item">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Calories:</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
          />
        </div>
        <div className="form-item">
          <label>Servings:</label>
          <input
            type="number"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
          />
        </div>
        <div className="form-item">
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = e.target.value;
                  setIngredients(newIngredients);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const newIngredients = ingredients.filter(
                    (_, i) => i !== index
                  );
                  setIngredients(newIngredients);
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setIngredients([...ingredients, ""]);
            }}
          >
            Add Ingredient
          </button>
        </div>
        <div className="form-item">
          <label>Directions:</label>
          {directions.map((direction, index) => (
            <div key={index}>
              <input
                type="text"
                value={direction}
                onChange={(e) => {
                  const newDirections = [...directions];
                  newDirections[index] = e.target.value;
                  setDirections(newDirections);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const newDirections = directions.filter(
                    (_, i) => i !== index
                  );
                  setDirections(newDirections);
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setDirections([...directions, ""]);
            }}
          >
            Add Direction
          </button>
        </div>
        <div className="form-item">
          <label>Is Completed?</label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;
