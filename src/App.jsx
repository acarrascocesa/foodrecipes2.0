import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/recipe/:id" element={<RecipeDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
