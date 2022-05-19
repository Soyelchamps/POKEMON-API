import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./routes/Layout/layout";
import Home from "./routes/home/home";
import User from "./routes/users/user";
import About from "./routes/about/about";
import "./App.css";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
const App = () => {
  return (
    //   <>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //   </nav>
    //   <div style={{ display: "flex" }}>
    //     <div>Sidebar</div>
    //     <div style={{ marginLeft: "25px" }}>
    //       <Outlet />
    //     </div>
    //   </div>
    // </>
    
    
    
    
    <>
    <nav>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/pokemon/:name" element={<User />} />
        
      </Route>
      <Route index path="/About" element={<About />} />
    </Routes>
    </nav>
    </>
  );
};

export default App;
