import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Statistica from "./components/Statistica/Statistica";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/statistica" element={<Statistica />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
