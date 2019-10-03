import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";

function App() {
  return (
    <div className="App">
      <Header />
      <Exercises />
      <Footer />
    </div>
  );
}

export default App;
