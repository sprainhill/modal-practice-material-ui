import React from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Exercises from "./components/exercises";
import { muscles, exercises } from "./store";

function App() {
  const [category, setCategory] = React.useState("");
  const [exercise, setExercise] = React.useState("");
  // console.log("App seedExercises", seedExercises);

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

  // console.log("App getExerciseByMuscles", getExerciseByMuscles());

  const exerciseProps = getExerciseByMuscles();

  const handleCategorySelected = category => {
    setCategory(category);
  };

  const handleExerciseSelected = id => {
    // console.log("exercises", exercises);
    const selected = exercises.find(exercise => exercise.id === id);

    setExercise(selected);
    // handleCategorySelected(selected);
  };

  return (
    <>
      <Header />
      <Exercises
        exercises={exerciseProps}
        exercise={exercise}
        category={category}
        onSelect={handleExerciseSelected}
      />
      <Footer
        muscles={muscles}
        onSelect={handleCategorySelected}
        category={category}
      />
    </>
  );
}

export default App;
