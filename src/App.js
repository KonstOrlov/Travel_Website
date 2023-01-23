import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/pages/Home.js";
import Navbar from "./components/Navbar.js";

import './App.css';

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes >
          <Route path="/" exact element={<Home/>}/>
        </Routes >
      </Router >
    </>
  );
}

export default App;
