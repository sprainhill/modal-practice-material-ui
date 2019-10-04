import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
import { muscles, exercises } from "./store";

function App() {
  // const [exercises, setExercises] = React.useState("");
  console.log("App exercises", exercises);

  const getExerciseByMuscles = () => {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };

  console.log("App getExerciseByMuscles", getExerciseByMuscles());
  return (
    <>
      <Header />
      <Exercises />
      <Footer muscles={muscles} />
    </>
  );
}

export default App;
