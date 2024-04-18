import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <div className="homepage">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="footer">
            <Footer />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
