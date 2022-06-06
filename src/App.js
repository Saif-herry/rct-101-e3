import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";




function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feeds"
          element={
            
              
             <RequiredAuth> <Products /></RequiredAuth>
            
            
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;