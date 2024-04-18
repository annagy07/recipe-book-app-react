import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <div className="App">
        <div className="homepage">
          <div>
            <Navbar />
          </div>
          <div>
            <RecipeList />
          </div>
          <div>
            <Footer />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
