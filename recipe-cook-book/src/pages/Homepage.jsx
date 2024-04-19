import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RecipeData from "../recipe-list.json";
import RecipeList from "../components/RecipeList";

function Homepage() {
  return (
    <div>
      <RecipeList />
    </div>
  );
}

export default Homepage;
