import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComp";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-story" element={<CreateStory />} />
          </Routes>
        </div>
      </Router>

      {/* <StoryCardComp />
      <StoriesGrid /> */}
    </>
  );
}

export default App;
