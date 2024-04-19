import "./RecipeCard.css";
import { Link, NavLink } from "react-router-dom";

function RecipeCard(props) {
  const { recipe } = props;

  return (
    <Link to={`/recipe/${recipe.id}`} className="block">
      <div>
        <h3>{recipe.name}</h3>
        <img src={recipe.image} alt={recipe.name} />
        <p>Calories: {recipe.calories}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
