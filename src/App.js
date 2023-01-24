import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/pages/Home.js";
import Navbar from "./components/Navbar.js";

import "./App.css";
import Products from "./components/pages/Products.js";
import Services from "./components/pages/Services.js";
import SignUp from "./components/pages/SignUp.js";

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes >
          <Route path="/Travel_Website" exact element={<Home/>}/>
          <Route path="/Travel_Website/products" exact element={<Products/>}/>
          <Route path="/Travel_Website/services" exact element={<Services/>}/>
          <Route path="/Travel_Website/sign-up" exact element={<SignUp/>}/>
        </Routes >
      </Router >
    </>
  );
}

export default App;
