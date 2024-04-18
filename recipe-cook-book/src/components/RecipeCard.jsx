import "./RecipeCard.css";

function RecipeCard(props) {
  const { recipe } = props;

  return (
    <div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <p>Calories: {recipe.calories}</p>
    </div>
  );
}

export default RecipeCard;
