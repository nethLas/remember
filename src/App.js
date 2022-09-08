import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/global.scss'
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import HeroDetails from "./pages/HeroDetails";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <AppHeader />
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/:id" element={<HeroDetails />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

      {/* <StoryCardComp />
      <StoriesGrid /> */}
    </>
  );
}

export default App;
