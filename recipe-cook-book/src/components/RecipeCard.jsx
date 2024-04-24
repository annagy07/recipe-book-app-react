import "./RecipeCard.css";
import { Link, NavLink } from "react-router-dom";

function RecipeCard(props) {
  const { recipe } = props;

  return (
    // <NavLink to={`/recipe/${recipe.id}`} className="nav-link">
    <div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
    </div>
    // </NavLink>
  );
}

export default RecipeCard;
