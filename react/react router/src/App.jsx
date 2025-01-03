import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Navbar from "./componets/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
      </Routes>
    </>
  );
}

export default App;
