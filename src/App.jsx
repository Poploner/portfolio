
// import { Router, Routes } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router";



export default function App() {
  return(
    <>
    
      <Sidebar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  )
}