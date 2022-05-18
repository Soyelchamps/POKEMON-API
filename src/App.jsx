import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout/layout";
import Home from "./routes/home/home";
import User from "./routes/users/user";
import About from "./routes/about/about";
import "./App.css";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/pokemon/:name" element={<User />} />
      </Route>
      <Route index path="/test" element={<About />} />
    </Routes>
  );
};

export default App;
