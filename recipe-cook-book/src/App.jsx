import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RecipeList from "./components/RecipeList";
import { Routes, Route } from "react-router-dom";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import Homepage from "./pages/Homepage";

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
            </Routes>
          </div>
          <div>{/* <RecipeList /> */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
