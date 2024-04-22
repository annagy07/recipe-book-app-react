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

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleIsCompletedInput = (e) => setIsCompleted(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      calories,
      image,
      servings,
      isCompleted,
      ingredients,
    };
    console.log("Submitted: ", newRecipe);
    props.addRecipe(newRecipe);

    // Reset the state
    setName("");
    setCalories(0);
    setImage("");
    setServings(0);
    setIsCompleted(false);
  };

  // Füge ein neues Input-Feld hinzu
  const addInput = () => {
    setIngredients([...ingredients, ""]);
  };

  // Aktualisiere den Wert eines bestimmten Input-Feldes
  const handleIngredientsInput = (index, event) => {
    const newInputs = [...ingredients];
    newInputs[index] = event.target.value;
    setIngredients(newInputs);
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit} className="add-recipe">
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>

        <div>
          <label>Calories: </label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>

        <div>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </div>

        <div>
          <label>Servings: </label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </div>

        <div>
          <label>Is Complete? </label>
          <input
            type="checkbox"
            name="isCompleted"
            checked={isCompleted}
            onChange={handleIsCompletedInput}
          />
        </div>

        <div>
          <label>Ingredients: </label>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              value={ingredient}
              onChange={(event) => handleIngredientsInput(index, event)}
            />
          ))}
          <button type="button" onClick={addInput}>
            +
          </button>
        </div>
        <button type="submit">Add a Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
