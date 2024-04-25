import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RecipeList from "./components/RecipeList";
import { Routes, Route } from "react-router-dom";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import EditRecipe from "./pages/EditRecipe";


function App() {
  return (
    <>
      <div className="App">
        <div className="homepage">
          <div>
            <Navbar />
            <Footer />
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/edit/:recipeId" element={<EditRecipe />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
