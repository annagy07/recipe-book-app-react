import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RecipeData from "../recipe-list.json";



function RecipeDetailsPage () {
    const { recipeId } = useParams();
    const [recipeDetails, setrecipeDetails] = useState(null);

    useEffect(() => {
    const recipe = RecipeData.find((recipe) => recipe.id === recipeId);
    setrecipeDetails(recipe);
    }, [recipeId]);

    return (
        <div>Hi I'm a Recipe Details Page</div>
    );
}

export default RecipeDetailsPage;