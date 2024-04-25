// src/components/AddMovie.jsx
import "./NewRecipeForm.css";
import { useState } from "react";

function NewRecipeForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [ingredients, setIngredients] = useState([""]);
  const [directions, setDirections] = useState([""]);

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleIsCompletedInput = (e) => setIsCompleted(e.target.checked);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecipe = {
  //     id: new Date().getTime().toString(),
  //     name,
  //     calories,
  //     image,
  //     servings,
  //     isCompleted,
  //     ingredients,
  //     directions,
  //   };
  //   console.log("Submitted: ", newRecipe);
  //   props.addRecipe(newRecipe);

  //   // Reset the state
  //   setName("");
  //   setCalories(0);
  //   setImage("");
  //   setServings(0);
  //   setIsCompleted(false);
  //   setIngredients([""]);
  //   setDirections([""]);
  // };

  // Neue Input Feld bei Zutaten
  const addInputIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientsInput = (index, event) => {
    const newInputs = [...ingredients];
    newInputs[index] = event.target.value;
    setIngredients(newInputs);
  };

  // Neue Input Feld bei Anweisungen
  const addInputDirections = () => {
    setDirections([...directions, ""]);
  };

  const handleDirectionsInput = (index, event) => {
    const newInputs = [...directions];
    newInputs[index] = event.target.value;
    setDirections(newInputs);
  };

  // Create new recipe when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: new Date().getTime().toString(),
      name,
      calories,
      image,
      servings,
      isCompleted,
      ingredients,
      directions,
    };
    console.log("Submitted: ", newRecipe);
    props.addRecipe(newRecipe);

    // Reset the state
    setName("");
    setCalories(0);
    setImage("");
    setServings(0);
    setIsCompleted(false);
    setIngredients([""]);
    setDirections([""]);
  };

  return (
    <div className="AddRecipe">
      <h4>Add a Recipe</h4>

      <form onSubmit={handleSubmit} className="add-recipe">
        <div className="form-item">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>

        <div className="form-item">
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </div>

        <div className="form-item">
          <label>Calories: </label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>

        <div className="form-item">
          <label>Servings: </label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </div>

        <div className="form-item">
          <label>Ingredients: </label>
          {ingredients.map((ingredient, index) => (
            <input
              className="input-field"
              key={index}
              value={ingredient}
              onChange={(event) => handleIngredientsInput(index, event)}
            />
          ))}
          <button
            type="button"
            onClick={addInputIngredient}
            className="plus-btn"
          >
            +
          </button>
        </div>

        <div className="form-item">
          <label>Directions: </label>
          {directions.map((direction, index) => (
            <input
              className="input-field"
              key={index}
              value={direction}
              onChange={(event) => handleDirectionsInput(index, event)}
            />
          ))}
          <button
            type="button"
            onClick={addInputDirections}
            className="plus-btn"
          >
            +
          </button>
        </div>
        <div className="form-item">
          <label>Is Complete? </label>
          <input
            type="checkbox"
            name="isCompleted"
            checked={isCompleted}
            onChange={handleIsCompletedInput}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
