import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
import { muscles, exercises } from "./store";

function App() {
  const [exercises, setExercises] = React.useState("");

  return (
    <>
      <Header />
      <Exercises />
      <Footer muscles={muscles} />
    </>
  );
}

export default App;
